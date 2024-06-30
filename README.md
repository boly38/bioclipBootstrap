# bioclipBootstrap

This project aims is to make Node.js API call for 
- the [Imageomics/bioclip](https://github.com/Imageomics/bioclip) project.

Ref.
- [BioCLIP paper (embedded demo)](https://imageomics.github.io/bioclip/)
- Huggingface [imageomics/bioclip-demo](https://huggingface.co/spaces/imageomics/bioclip-demo).
- Huggingface [3oly/grBird](https://huggingface.co/spaces/3oly/grBird).
- very-first [REX discussion](https://huggingface.co/spaces/imageomics/bioclip-demo/discussions/7)

## Content for imageomics/bioclip-demo
- There is an MVP bash example via [bioclip.sh](imageomics/bioclip-demo/bioclip.sh).
- Node.js API are tested here via [bioclip.js](imageomics/bioclip-demo/bioclip.js).

Node example:
````bash
$ node imageomics/bioclip-demo/bioclip.js help
cmd[help]>
usage:
        node imageomics/bioclip-demo/bioclip.js <help|api_info|odc_url|odc_blob|co|zsc>

$ node imageomics/bioclip-demo/bioclip.js odc_blob
# result <here> ^^ 
````

Limitations
- Python is not covered here.
- need more clarification on HowTo use `/zero_shot_classification` / `/change_output` endpoints


## Content for 3oly/grBird
- Python not covered.
- Node.js API are tested here via [api_classification.js](3oly/grBird/api_classification.js).

Node example:
````bash
$ node 3oly/grBird/api_classification.js "https://static.scientificamerican.com/dam/m/4beab95014486f06/original/Tree-Swallow2.JPG?w=600"