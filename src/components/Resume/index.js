import React from "react";

import { Link } from "../Layout";
const Resume = props => {
  return (
    <div
      className="main"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Link link="resume.pdf">
        <button className="btn btn-info" style={{ marginBottom: "10px" }}>
          Open In PDF Viewer
        </button>
      </Link>
      <iframe
        title="Resume"
        src="resume.pdf#toolbar=0&navpanes=0"
        width="100%"
        height="800px"
      ></iframe>
    </div>
  );
};

export default Resume;
