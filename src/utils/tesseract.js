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

export function extractRosterNames(text) {
    // seperate names into different lines to grab last names only
    const seperatedNames = text.split("\n");
    return seperatedNames.map(names=> {
        // filters through seperated names and splits at comma or period (safety measure)
        const filteredNames = names.split(/[,.]\s*/);
        console.log("Roster filtered names:", filteredNames)
        //grabs just the last name since format is last name, first name
        return filteredNames[0].trim(); 
        // removes empty strings from lastNames array
    }).filter(name => name)
}


export function extractZoomNames(text) {
    // separate names into different lines to grab last names only
    const separatedNames = text.split("\n");
    return separatedNames.map(name => {
        // removes '©' and '®' characters
        const filteredName = name.replace(/©/g, '').replace(/®/g, '').trim();
        console.log("Zoom names:", filteredName);
        return filteredName;
    }).filter(name => name);
}


