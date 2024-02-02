import React, {useState} from "react";
import { extractNames, detectImage } from "../utils/tesseract";

function ScreenshotDetection() {

  const [rosterLastNames, setRosterLastNames] = useState([]);
  const [zoomLastNames, setZoomLastNames] = useState([]);

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
    const zoomImageUpload = e.target.files;
    console.log(zoomImageUpload)

    if(zoomImageUpload.length > 0) {
        try{
            const lastNames = [];
            for (const zoomImage of zoomImageUpload) {
                const detectedNames = await detectImage(zoomImage);
                // excludes instructors and Ts
                const excludedNames = ["Jessica Song(TA)","Junghoon Yoon (Host)"];
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

  return (
    <div>
            <h1>Attendance Checker</h1>
            <label> Upload your attendance roster list </label>
            <input type="file" id="rosterImageUpload" onChange={rosterImageUpload} />

            <label> Upload Zoom participants list </label>
            <input type="file" id="zoomImageUpload" onChange={zoomImageUpload} />

    </div>
  )
}

export default ScreenshotDetection;
