import React from 'react'
import '../spreadsheets/App.css'
import github from '../assets/git.svg'
import linked from '../assets/link.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('NikhilMimroth_Resume_2023.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'NikhilMimroth_Resume_2023.pdf';
            alink.click();
        })
    }) } 
  return (
    <>
    <footer>
      <div className="social">
        <a href="https://github.com/Nikhil667">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/nikhil-mimroth/">
          <img src={linked} alt="linkedIn" />
        </a>
        <Link onClick={downloadPDF} >Resume</Link>
      </div>
      <p className="secondary-color">
        Created By <a href="https://github.com/Nikhil667">Nikhil Mimroth.</a>
      </p>
    </footer>
    </>
  );
}
