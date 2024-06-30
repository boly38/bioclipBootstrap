import {Client} from "@gradio/client";
import * as path from "node:path";

const MY_IMAGE = "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?cs=srgb&dl=pexels-pixabay-326900.jpg&fm=jpg";
const printObject = obj => console.log(JSON.stringify(obj, null, 2));

async function api_classification(image_url = MY_IMAGE) {
    const client = await Client.connect("3oly/grBird");
    const result = await client.predict("/api_classification",
        [image_url]
    ).catch(console.error);
    printObject(result.data);
}


try {
    await api_classification(process.argv[2])
} catch (err) {
    console.error(` ❌ ${err.message}`);
    process.exit(1);
}


/**
 * usage :
 * node 3oly/grBird/api_classification.js
 * node 3oly/grBird/api_classification.js "https://static.scientificamerican.com/dam/m/4beab95014486f06/original/Tree-Swallow2.JPG?w=600"
 */
