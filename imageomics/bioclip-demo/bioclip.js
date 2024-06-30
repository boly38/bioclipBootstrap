import {Client} from "@gradio/client";
import * as path from "node:path";

const BUS_IMAGE = "https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png";
const MY_IMAGE = "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?cs=srgb&dl=pexels-pixabay-326900.jpg&fm=jpg";
const response_0 = await fetch(MY_IMAGE);
const exampleImageBlob = await response_0.blob();
const printObject = obj => console.log(JSON.stringify(obj, null, 2));

class Demonstrator {
    getValidCommands() {
        const toExcludeMethod = ["constructor", "demo", "getValidCommands"];
        return Object.getOwnPropertyNames(Demonstrator.prototype)
            .filter(k => !toExcludeMethod.includes(k))
    }

    async demo(cmd = "help") {
        if (!this.getValidCommands().includes(cmd)) {
            throw new Error(`unknown cmd ${cmd}`);
        }
        console.log(`cmd[${cmd}]>`);
        await this[cmd]();
    }

    async help() {
        let commands = this.getValidCommands();
        console.log(`usage:\n\tnode ${path.basename(process.argv[1])} <${commands.join("|")}>`);
    }

    async api_info() {
        const client = await Client.connect("imageomics/bioclip-demo");
        printObject(client.api_info);
    }

    async odc_url() {
        const client = await Client.connect("imageomics/bioclip-demo");
        const result = await client.predict("/open_domain_classification",
            [{"path": MY_IMAGE}, "Species"]
        ).catch(console.error);
        printObject(result.data);
    }

    async odc_blob() {
        const client = await Client.connect("imageomics/bioclip-demo");
        const result = await client.predict("/open_domain_classification",
            [exampleImageBlob, "Species"]
        ).catch(console.error);
        printObject(result.data);
    }

    async co() {
        const client = await Client.connect("imageomics/bioclip-demo");
        const result = await client.predict("/change_output", {
            img: exampleImageBlob,
            choice: "Kingdom",
        }).catch(console.error);
        ;
        printObject(result.data);
    }

    /*
        not sure how it works / demo return errors too
     */
    async zsc() {
        const client = await Client.connect("imageomics/bioclip-demo");
        const result = await client.predict("/zero_shot_classification",
            [{"path": BUS_IMAGE}, "HelloBus!"]
        ).catch(console.error);
        printObject(result);
    }

}

try {
    let demonstrator = new Demonstrator();
    await demonstrator.demo(process.argv[2])
} catch (err) {
    console.error(` ❌ ${err.message}`);
    process.exit(1);
}


/**
 * usage :
 * node imageomics/bioclip-demo/bioclip.js
 * node imageomics/bioclip-demo/bioclip.js help
 * node imageomics/bioclip-demo/bioclip.js odc_url
 */
