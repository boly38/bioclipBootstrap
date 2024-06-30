#!/bin/bash
IMAGE_URL="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?cs=srgb&dl=pexels-pixabay-326900.jpg&fm=jpg"

EXAMPLE=$(curl -X POST https://imageomics-bioclip-demo.hf.space/call/open_domain_classification -s -H "Content-Type: application/json" -d '{
            "data": [
              {"path":"'${IMAGE_URL}'"},
              "Species"
          ]}')
# echo "$EXAMPLE"
EVENT_ID=$(echo "$EXAMPLE" | awk -F'"' '{ print $4}')
# echo "$EVENT_ID"
curl -N https://imageomics-bioclip-demo.hf.space/call/open_domain_classification/$EVENT_ID
