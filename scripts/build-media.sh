#!/usr/bin/env bash
# Transcodes source masters in Assets/ into web deliverables in public/media/.
# Three outputs per video: silent loop (homepage cards), full encode with audio
# (project page hero), poster still. Sources are never modified.
set -u

LOCK=".media-build.lock"
if ! mkdir "$LOCK" 2>/dev/null; then
  echo "Another build-media run holds $LOCK. Wait for it, or remove the directory."
  exit 1
fi
trap 'rmdir "$LOCK" 2>/dev/null' EXIT INT TERM

SRC="Assets"
OUT="public/media"
rm -rf "$OUT"
mkdir -p "$OUT/loop" "$OUT/full" "$OUT/poster" "$OUT/image"

# slug|source file|poster timestamp (seconds)|trim (seconds cut from the head)
#
# Trim exists for one asset: the Brunello hyper-motion master opens on an
# editing-timeline mockup (a white canvas labelled "AD 1" that zooms into the
# footage) lasting about half a second. The poster avoided it; playback did
# not, and a looping clip replayed it every pass. 0.6 cuts it cleanly.
VIDEOS='
uniqlo-ugc-indoor|UNIQLO - UGC indoor.mp4|4.0|0
uniqlo-ugc-outdoor|UNIQLO - UGC Outdoor.mp4|7.0|0
uniqlo-catalogue|UNIQLO - Product Catlouge.mp4|4.5|0
uniqlo-product-film|UNIQLO - Commercial.mp4|5.0|0
brunello-cinematic|BRUNELLO CUCINELLI - Cinematic Commercial Film.mp4|11.0|0
brunello-hyper-motion|BRUNELLO CUCINELLI - Hyper-Motion Advertisement.mp4|6.0|0.6
cloud-nine-splash-pops|CLOUD NINE — SPLASH POPS -  UGC.mp4|18.0|0
tiffany-product-story|TIFFANY- Product Story Commercial.mp4|12.0|0
tiffany-brand-cinematic|TIFFANY -Brand Cinematic Commercial.mp4|7.0|0
aura-royale-hyper-motion|AURA ROYALE — perfume hyper-motion.mp4|1.2|0
ember-house-hyper-motion|ember house Candle-hyper motion ad.mp4|7.0|0
noor-bean-cinematic|Nour & Bean -  Cenimatic Ad.mp4|6.0|0
noor-bean-hyper-motion|Nour & Bean -  Hyper Motion Ad.mp4|7.0|0
'

# slug|source file
IMAGES='
aura-royale-product|AURA ROYALE — product photography.jpeg
ember-house-logo|EMBER HOUSE Candle -logo.png
ember-house-packaging|EMBER HOUSE Candle -  Product Packaging.png
ember-house-social|EMBER HOUSE Candle -  Social Media Poster.png
ember-house-listing|EMBER HOUSE Candle - E-Commrce Listing ad.png
noor-bean-logo|Nour & Bean  - Logo.png
noor-bean-social|Nour & Bean -  Social Media Poster.png
noor-bean-product|Nour & Bean roduct Pictures.png
'

# Longest edge is clamped to $2 without ever upscaling; both dims stay even.
fit() {
  local file=$1 cap=$2 w h nw nh
  w=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$file")
  h=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$file")
  if [ "$w" -ge "$h" ]; then
    if [ "$w" -le "$cap" ]; then nw=$w; nh=$h; else nw=$cap; nh=$(( h * cap / w )); fi
  else
    if [ "$h" -le "$cap" ]; then nw=$w; nh=$h; else nh=$cap; nw=$(( w * cap / h )); fi
  fi
  echo "$(( nw / 2 * 2 )):$(( nh / 2 * 2 ))"
}

echo "=== VIDEO ==="
printf '%s\n' "$VIDEOS" | grep . | while IFS='|' read -r slug file ts; do
  in="$SRC/$file"
  [ -f "$in" ] || { echo "MISSING  $file"; continue; }

  ffmpeg -nostdin -v error -y -i "$in" -an -c:v libx264 -preset medium -crf 30 \
    -vf "scale=$(fit "$in" 1080),format=yuv420p" \
    -movflags +faststart "$OUT/loop/$slug.mp4"

  ffmpeg -nostdin -v error -y $cut -i "$in" -c:v libx264 -preset medium -crf 24 \
    -vf "scale=$(fit "$in" 1920),format=yuv420p" \
    -c:a aac -b:a 128k -movflags +faststart "$OUT/full/$slug.mp4"

  ffmpeg -nostdin -v error -y -ss "$ts" -i "$in" -frames:v 1 \
    -vf "scale=$(fit "$in" 1600)" -q:v 4 "$OUT/poster/$slug.jpg"

  echo "$slug  loop=$(du -k "$OUT/loop/$slug.mp4" | cut -f1)K  full=$(du -k "$OUT/full/$slug.mp4" | cut -f1)K"
done

echo "=== IMAGE ==="
printf '%s\n' "$IMAGES" | grep . | while IFS='|' read -r slug file; do
  in="$SRC/$file"
  [ -f "$in" ] || { echo "MISSING  $file"; continue; }
  ffmpeg -nostdin -v error -y -i "$in" -vf "scale=$(fit "$in" 2000)" -q:v 3 "$OUT/image/$slug.jpg"
  echo "$slug  $(du -k "$OUT/image/$slug.jpg" | cut -f1)K"
done

echo "=== DONE ==="
du -sh "$OUT"
