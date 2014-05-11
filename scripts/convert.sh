#!/bin/bash
# Convert the entire closure library to typescript declarations
FILES=$(./scripts/list_input_output.sh)
node src/main.js \
  --provides symbols.tsv \
  --globals index/closure-library/globals.d.ts \
  --input_root lib/closure-library/ \
  --output_root index/closure-library/ \
  $FILES