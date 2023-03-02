import React from 'react'
import '../spreadsheets/Home.css'
import github from '../assets/github.png'
import linked from '../assets/linked.png'

export default function Home({ name }) {

  return (
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
            stroke="#69FFB4"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="home-content">
        <p><span className='bold'>Welcome to my portfolio, </span><span className='bold' style={{ color: "#69FFB4" }}>{name && name.charAt(0).toUpperCase() + name.slice(1)}!</span></p>
        <p>I'm, Nikhil (Web Developer)</p>
        <p>Currently working on ReactJs (Frontend), ExpressJs (Backend)</p>
        <p> Here, you'll find a collection of my work and experiences in various fields. <br /> From graphic design to web development. <br /> I have a passion for creating visually stunning and functional projects that leave a lasting impact.</p>
        <div className='home-social-links'>
          <p className='bold'>Social Media</p>
          <div className='social'>
            <a href="https://www.youtube.com"><img src={github} alt="github"/></a>
            <a href="https://www.youtube.com"><img src={linked} alt="linkedIn"/></a>
          </div>
        </div>
        <div className='home-resume'>
          <p className='bold'>Resume</p>
          <a href="https://www.youtube.com" >Link to download my Resume</a>
        </div>
      </div>
    </section>
  );
}
