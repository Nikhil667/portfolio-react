import React from 'react'
import '../spreadsheets/App.css'
import github from '../assets/git.svg'
import linked from '../assets/link.svg'

export default function Footer() {
  return (
    <>
    <footer>
      <div className="social">
        <a href="https://www.youtube.com">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.youtube.com">
          <img src={linked} alt="linkedIn" />
        </a>
      </div>
      <p className="secondary-color">
        Created By <a href="https://github.com/Nikhil667">Nikhil Mimroth.</a>
      </p>
    </footer>
    </>
  );
}
