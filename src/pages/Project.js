import React from 'react'
import '../spreadsheets/Project.css'
import sample from '../assets/laptop-gradient.jpg'

export default function Project() {
  return (
    <section className='project-section'>
      <div className="project-content">
        <h2>Projects</h2>
        <p>From Concept to Deployment <br /> Delivering Customized Web Solutions Tailored to Meet Your Needs</p>
      </div>
      <div className="parent-grid">
        <div className="auto-grid">
          <div className="card ">
            <img src={sample} alt="sample" />
            <div className="card-item">
              <p><span className='secondary-color'>Name : </span> lorem4</p>
              <p><span className='secondary-color'>Description :</span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae labore quod facilis neque maiores ea quam.</p>
              <p><span className='secondary-color'>Tech Stack :</span>  ReactJs, Bootstrap, CSS</p>
              <div >
                <a href="/">Github Link</a>
                <a href="/">Website Link</a>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={sample} alt="sample" />
            <div className="card-item">
              <p><span className='secondary-color'>Name : </span> lorem4</p>
              <p><span className='secondary-color'>Description :</span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae labore quod facilis neque maiores ea quam.</p>
              <p><span className='secondary-color'>Tech Stack :</span>  ReactJs, Bootstrap, CSS</p>
              <div >
                <a href="/">Github Link</a>
                <a href="/">Website Link</a>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={sample} alt="sample" />
            <div className="card-item">
              <p><span className='secondary-color'>Name : </span> lorem4</p>
              <p><span className='secondary-color'>Description :</span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae labore quod facilis neque maiores ea quam.</p>
              <p><span className='secondary-color'>Tech Stack :</span>  ReactJs, Bootstrap, CSS</p>
              <div >
                <a href="/">Github Link</a>
                <a href="/">Website Link</a>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={sample} alt="sample" />
            <div className="card-item">
              <p><span className='secondary-color'>Name : </span> lorem4</p>
              <p><span className='secondary-color'>Description :</span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae labore quod facilis neque maiores ea quam.</p>
              <p><span className='secondary-color'>Tech Stack :</span>  ReactJs, Bootstrap, CSS</p>
              <div >
                <a href="/">Github Link</a>
                <a href="/">Website Link</a>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={sample} alt="sample" />
            <div className="card-item">
              <p><span className='secondary-color'>Name : </span> lorem4</p>
              <p><span className='secondary-color'>Description :</span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae labore quod facilis neque maiores ea quam.</p>
              <p><span className='secondary-color'>Tech Stack :</span>  ReactJs, Bootstrap, CSS</p>
              <div >
                <a href="/">Github Link</a>
                <a href="/">Website Link</a>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={sample} alt="sample" />
            <div className="card-item">
              <p><span className='secondary-color'>Name : </span> lorem4</p>
              <p><span className='secondary-color'>Description :</span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae labore quod facilis neque maiores ea quam.</p>
              <p><span className='secondary-color'>Tech Stack :</span>  ReactJs, Bootstrap, CSS</p>
              <div >
                <a href="/">Github Link</a>
                <a href="/">Website Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
