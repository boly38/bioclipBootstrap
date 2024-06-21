# bioclipBootstrap

This project aims is to make Node.js API call for the 
  [BioCLIP](https://github.com/Imageomics/bioclip) online demo.

Ref.
- [BioCLIP paper (embedded demo)](https://imageomics.github.io/bioclip/)
- Huggingface [bioclip-demo](https://huggingface.co/spaces/imageomics/bioclip-demo).

## Content
- Python not covered.
- There is an MVP bash example via [bioclip.sh](./bioclip.sh).
- Node.js API are tested here via [bioclip.js](./bioclip.js).

Node example:
````bash
$ node bioclip.js help
cmd[help]>
usage:
        node bioclip.js <help|api_info|odc_url|odc_blob|co|zsc>

$ node bioclip.js odc_blob
# result <here> ^^ 
````