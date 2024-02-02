import React, {useState, useEffect} from "react";
import { extractNames, detectImage } from "../utils/tesseract";

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
      // console.log("detected Names:", detectedNames);
      // returns last names from detected students names
      const lastNames = extractNames(detectedNames)
      console.log(lastNames)
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
            // looping through each zoom image in the zoomListImage array
            for (const zoomImage of zoomListImage) {
                const detectedNames = await detectImage(zoomImage);
                // excludes instructors and Ts
                const excludedNames = ["Jessica Song(TA)","Junghoon Yoon (Host)"];
                //gets lastnames from detected names and filters out names from the exludedNames array
                const filteredNames = extractNames(detectedNames)
                .filter(name => !excludedNames.includes(name));
                lastNames.push(...filteredNames);

                console.log(filteredNames)
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
    const lowercaseZoomLastNames = zoomLastNames.map((name) => name.toLowerCase());   

    // Find absent students (present in attendance, not in Zoom)
    const absentLastNames = lowercaseRosterLastNames.filter((lastName) => !lowercaseZoomLastNames.includes(lastName))
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
            <label> Upload your attendance roster list </label>
            <input type="file" id="rosterImageUpload" onChange={rosterImageUpload} />

            <label> Upload Zoom participants list </label>
            <input type="file" id="zoomImageUpload" onChange={zoomImageUpload} />

            <button onClick={compareLists}>Compare</button>

            <div id="result">{result}</div>

    </div>
  )
}

export default ScreenshotDetection;
