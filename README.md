# attendance-checker

Attendance Checker is a tool designed to simplify attendance management using the Tesseract API. With this application, users can effortlessly handle attendance by following a straightforward process. No more manual searches through Zoom participants – just snap a picture, upload it, and let the tool intelligently compare it to the student roster list. 

## Features
• Simple Image Uploads: Easily upload images of the attendance roster and the Zoom participants list to initiate the attendance-checking process.  
• Accurate Name Extraction: Utilizes Tesseract's powerful optical character recognition to accurately extract student names from both images.  
• One-Click Comparison: Streamlines the attendance-checking process with a single click on the "Compare" button.  
• Automatic Absentee Identification: Intelligently compares the extracted names, identifying and displaying the names of absent students. 

## Important Considerations
• Name Format Requirement: Ensure that student names in both images follow the "last name, first name" format for accurate extraction.  
• Exclusion of TA's and Instructors: Include any TA's and instructors in the excluded names array. Add their names exactly as displayed on Zoom for automated exclusion.  
• Images must be uploaded in .png, or .jpg format.

## How to Use  
### Image Uploads
• Upload the attendance roster image.  
• Upload the Zoom participants list image.  
• After both images have been uploaded the last names of each list will populate on the page.  

### Initiate Comparison  
• Click the "Compare" button to start the automated attendance comparison.   

### Identify Absentees  
• Absent students will be intelligently identified and displayed for quick reference. Abstent students referes to students who are not included in the Zoom participants list but are included in the attendance roster.  
