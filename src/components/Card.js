import React from 'react'
import sample from '../assets/laptop-gradient.jpg'

export default function Card() {
  return (
    <div className="card ">
    <img src={sample} alt="sample" />
    <div className="card-item">
      <p><span className='secondary-color'>Name : </span>Photo Editor App</p>
      <p><span className='secondary-color'>Description : </span>Contains tools to fine-tune the brightness, contrast, saturation, and other aspects of the photo.</p>
      <p><span className='secondary-color'>Tech Stack : </span>ReactJs, CSS(Grid, Flex)</p>
      <div >
        <a href="/">Github Link</a>
        <a href="/">Website Link</a>
      </div>
    </div>
  </div>
  )
}
