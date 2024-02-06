# ATP

ATP is a tool designed to simplify attendance management using the Tesseract API. With this application, users can effortlessly handle attendance by following a straightforward process. No more manual searches through Zoom participants – just snap a picture, upload it, and let the tool intelligently compare it to the student roster list. 

## Important Format Considerations
• Ensure that student names in the roster image follows the "last name, first name" format for accurate extraction. Zoom participants image does not need to follow the format, but does need to include the students last name to be accounted for.  
• Images must be uploaded in .png, or .jpg format.  

## Getting Started
1. First, start the server by running

```
npm run start

```
2. Open http://127.0.0.1:5173/ to view in browser.
3. Click screen shot detection (video extraction is still under development).
4. Upload the attendance roster image.  
5. Upload the Zoom participants list image.  
6. Click the "Compare" button to start the automated attendance comparison.   
7. Absent students will be intelligently identified and displayed for quick reference. Absent students referes to students who are not included in the Zoom participants image but are included in the attendance roster.
   
[screen-capture (4).webm](https://github.com/jsong73/tesseract-attendance/assets/111620893/79418945-9f2f-4b1d-8b43-ad0317c7f555)  


## Python Script for Automated Attendance  
You can also take advantage of the "Run Script" feature to automate the attendance-taking process. This script is designed to quickly mark everyone as present (since most student will be present). You can go back and mark the students who are absent by hand as there will be fewer absentees.  

**Note:** To enable this feature, ensure you have cloned the [QuickAttendance](https://github.com/Serendipbrity/QuickAttendance) repository. The path to this repository needs to be configured in the `server.py` file. 

### Usage Instructions
1. Click the "Run Script" button.
2. Place your mouse over the first name in the browser where you want the script to start. **Do not click; the script will handle the clicks for you.**
3. The script will automatically navigate through the list, marking each student as present.

### Quick Stop
To stop the script promptly, move your mouse to the top left corner of the screen.

https://github.com/jsong73/tesseract-attendance/assets/111620893/fbb7ee5e-06d7-47da-bfa8-2c7a226eec2c

## Future Developments  
Future developments will include video extraction for larger classes.  

## Credits  
Special thanks to [Serendipbrity](https://github.com/Serendipbrity) for their contributions with the [QuickAttendance](https://github.com/Serendipbrity/QuickAttendance) script.
