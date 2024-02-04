import React, {useState, useEffect} from "react";
import { extractRosterNames, extractZoomNames, detectImage } from "../utils/tesseract";

function ScreenshotDetection() {

  const [rosterLastNames, setRosterLastNames] = useState([]);
  const [zoomLastNames, setZoomLastNames] = useState([]);
  const [result, showResults] = useState('');

  
  const rosterImageUpload = async(e) =>{
    const rosterListImage = e.target.files[0]
    console.log(rosterListImage)
  
  if(rosterListImage){
    try{
      const detectedNames = await detectImage(rosterListImage);
      console.log("roster detected Names:", detectedNames);
      // returns last names from detected students names
      const lastNames = extractRosterNames(detectedNames)
      console.log("roster last names:", lastNames)
      setRosterLastNames(lastNames);
    } catch (error) {
      console.log("error:", error)
    }
  }
}

const zoomImageUpload = async(e) => {
    const zoomListImage = e.target.files;
    console.log(zoomListImage)

    if(zoomListImage.length > 0) {
        try{
            const lastNames = [];
            // // looping through each zoom image in the zoomListImage array
            for (const zoomImage of zoomListImage) {
                const detectedNames = await detectImage(zoomImage);
            console.log("zoom detected names:", detectedNames)
            // Extract last names from detected names and check if roster last names are included
            const filteredNames = extractZoomNames(detectedNames)
            console.log("Zoom filtered names:", filteredNames);

            lastNames.push(...filteredNames);
        }
            
            setZoomLastNames(lastNames);
        } catch(error){
            console.log("error:", error)
        }
    }

}

const compareLists = () =>{
    // making sure both images are upload before comparing 
    if(rosterLastNames.length === 0 || zoomLastNames.length === 0 ) {
        alert("Both roster and zoom image must be uploaded before comparing")
    }

    // last names to lowercase for consistent comparison
    const lowercaseRosterLastNames = rosterLastNames.map((name) => name.toLowerCase());
    const lowercaseZoomNames = zoomLastNames.map((name) => name.toLowerCase());   

    console.log("lowercase roster names:" , lowercaseRosterLastNames)
    console.log("lowercase zoom names:" ,lowercaseZoomNames)

    // absent names are if the zoom names do not contain the roster last names 
    const absentLastNames = lowercaseRosterLastNames.filter(
        (lastName) => !lowercaseZoomNames.some((zoomName) => zoomName.includes(lastName))
    );

    console.log(absentLastNames)
    if (absentLastNames.length === 0 ){
        showResults("All students are present")
    } else {
        showResults(`Absent Last Names: ${absentLastNames.join(', ')}`)
    }
}



  return (
    <div>
            <h1>Attendance Checker</h1>

            <label> Upload Roster image</label>
            <input type="file" id="rosterImageUpload" onChange={rosterImageUpload} />

            <label> Upload Zoom participants image </label>
            <input type="file" id="zoomImageUpload" onChange={zoomImageUpload} />

            <button onClick={compareLists}>Compare</button>

            <div id="result">{result}</div>

    </div>
  )
}

export default ScreenshotDetection;
