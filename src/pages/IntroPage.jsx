import React from "react"
import { Link } from 'react-router-dom';

function IntroPage() {
    return (
      <div>
        <h1>Choose Detection Type</h1>
        <Link to="/screenshot-detection">
          <button>Click here for Screenshot Detection</button>
        </Link>
        <Link to="/video-detection">
          <button>Click here for Video Detection</button>
        </Link>
      </div>
    );
  }

export default IntroPage;
