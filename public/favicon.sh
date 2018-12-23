# https://mathiasbynens.be/notes/touch-icons

for i in 32 76 120 152 180 192; do
  convert glider.png -resize ${i}x${i} favicon-${i}.png
done
mv favicon-32.png favicon.png
