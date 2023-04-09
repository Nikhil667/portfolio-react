import React from 'react'
import '../spreadsheets/Home.css'
import { Link } from 'react-router-dom';

export default function Home() {

  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('Resume_Nikhil.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'NikhilMimroth_Resume_2023.pdf';
            alink.click();
        })
    })
}

  return (
    <>
      {/* <div id="blob"></div>
      <div id="blur"></div> */}
      <section className="home-section">
        <div className="home-img">
          <svg
            id="star-svg"
            className="reveal dash active"
            viewBox="0 0 415 282"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              pathLength="1"
              d="M362 3.5H46.5V220.5H362V18H61V207H349.5L407.5 265H10L43 232H355L401.5 278.5H0"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="home-content"  >
          {/* <span className='bold' style={{ color: "#69FFB4" }}>{name && name.charAt(0).toUpperCase() + name.slice(1)}!</span></p> */}
          <div>
            <p className='home-subtitle'>
              Hi, I'm{" "}
              <span style={{ color: "var(--tertiary-text-color)" }}>
                Nikhil!
              </span>
            </p>
            <h1 className='home-title' style={{ color: "var(--primary-color)" }}>
              Full Stack Developer
            </h1>
          </div>
          <p>As a full-stack developer, I am eager to showcase my passion for web development and my commitment to continuous learning. <br /><br /> Through self-directed study and personal projects, I have acquired a strong foundation in programming languages such as HTML, CSS, and JavaScript as well as experience using frameworks such as React and Node.js.</p>
        <div className='home-resume'>
          <p className='bold'>Resume</p>
          <Link onClick={downloadPDF} >Link to download my Resume</Link>
        </div>
        </div>
      </section>
      
    </>
  );
}
