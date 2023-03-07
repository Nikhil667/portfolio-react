import React from 'react'
import '../spreadsheets/Home.css'

export default function Home() {

  return (
    <>
    <div id="blob"></div>
      <div id="blur"></div>
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
      <div className="home-content">
        {/* <span className='bold' style={{ color: "#69FFB4" }}>{name && name.charAt(0).toUpperCase() + name.slice(1)}!</span></p> */}
        <div>
          <p>Hi, I'm Nikhil </p>
          <h1 style={{ color: 'var(--primary-color)' }} >Full Stack Developer</h1>
        </div>
        <p>As a full-stack developer with no prior professional experience, I am eager to showcase my passion for web development and my commitment to continuous learning. <br /><br /> Through self-directed study and personal projects, I have acquired a strong foundation in programming languages such as HTML, CSS, and JavaScript as well as experience using frameworks such as React and Node.js.</p>
        <div className='home-resume'>
          <p className='bold'>Resume</p>
          <a href="https://www.youtube.com" >Link to download my Resume</a>
        </div>
      
      </div>
    </section>
  </>
  );
}
