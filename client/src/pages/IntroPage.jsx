import React from "react"
import { Link } from 'react-router-dom';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import CameraIcon from '@mui/icons-material/Camera';

function IntroPage() {
    return (
      <div>
        <h1 id="detectionHeader">Choose Detection Type</h1>
        <Link to="/screenshot-detection">
          <button className="detectionBtn"> Screenshot Detection <CameraIcon style={{ verticalAlign: "middle", marginBottom: "2px", marginLeft: "5px" }}/> </button>
        </Link>
        <Link to="/video-detection">
          <button className="detectionBtn">Video Detection <ScreenshotMonitorIcon style={{ verticalAlign: "middle", marginBottom: "2px", marginLeft: "5px" }}/> </button>
        </Link>
      </div>
    );
  }

export default IntroPage;
