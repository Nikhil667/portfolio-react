import React from 'react'
import '../spreadsheets/Home.css'
import Card from '../components/Card'
import datahome from '../data/datahome.json';
import gif from '../assets/full-stack-development.gif'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className='home-content'>
        <h1>
          I CAN HELP YOU MAKE WEBSITES AND PRODUCTS.
        </h1>
          <div>

        <img src={gif} alt="/" />
          </div>
        
        {/* <div className="wrapper2">
        <div className="circle" id="circle">
          <svg
            className="rotate"
            width="100"
            height="100"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="55"
              r="54.5"
              stroke="#9F9F9F"
              strokelinecapp="round"
              strokeDasharray="5 5"
            />
            <circle cx="55" cy="55" r="50" fill="black" />
            <path
              d="M105 55C105 61.5661 103.707 68.0679 101.194 74.1342C98.6812 80.2005 94.9983 85.7124 90.3553 90.3553C85.7124 94.9983 80.2004 98.6812 74.1342 101.194C68.0679 103.707 61.5661 105 55 105C48.4339 105 41.9321 103.707 35.8658 101.194C29.7995 98.6812 24.2876 94.9983 19.6447 90.3553C15.0017 85.7124 11.3188 80.2004 8.80602 74.1342C6.29329 68.0679 5 61.5661 5 55L55 55H105Z"
              fill="var(--primary-color)"
            />
          </svg>
        </div>
      </div> */}
        </div>
      </section>

      

      <section className="about-section">
        <div className="about-content">
          <p>
            <Link to="/project" 
              style={{ 
                  color: "white", 
                  fontSize: "1.8rem", 
                  letterSpacing: "2px",
                  // textDecoration: "none"
                  
                  }}>
              More Projects -&gt;
            </Link>
          </p>
          
        </div>
        <div className="parent-grid">
          <div className="auto-grid">
            {datahome.Projects.map((ele, index) => {
              return <Card key={index} props={ele} />;
            })}
          </div>
        </div>
      </section>

    </>
  );
}
