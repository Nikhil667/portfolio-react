import React from 'react'
import sample from '../assets/laptop-gradient.jpg'

export default function Card({props}) {

  return (
    <div className="card ">
    {/* <div style={{height: "10em", backgroundColor: `${props.background}` }} >{props.imgUrl}</div> */}
    <img src={sample} alt="/" />
    <div className="card-item">
      <p><span className='secondary-color'>Name : </span>{props.name}</p>
      <p><span className='secondary-color'>Description : </span>{props.description}</p>
      <p><span className='secondary-color'>Tech Stack : </span>{props.techStack}</p>
      <div >
        <a href={props.githubUrl}>Github Link</a>
        <a href={props.linkedUrl}>Website Link</a>
      </div>
    </div>
  </div>
  )
}