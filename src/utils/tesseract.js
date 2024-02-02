import Tesseract from "tesseract.js";

export async function detectImage(file) {
    const image = URL.createObjectURL(file);

    try {
        const {data: { text } } = await Tesseract.recognize(image, 'eng', { logger: m => console.log(m) });
        return text;
    } catch(error){
        console.log("error:", error)
        throw error;
    }
}

export function extractNames(text) {
    // seperate names into different lines to grab last names only
    const seperatedNames = text.split("\n");
    return seperatedNames.map(names=> {
        // filters through seperated names and splits at comma or period (safety measure)
        const filteredNames = names.split(/[,.]\s*/);
        //grabs just the last name since format is last name, first name
        return filteredNames[0].trim(); 
        // removes empty strings from lastNames array
    }).filter(name => name)
}

