import React  from 'react'
import '../spreadsheets/Project.css'
import Card from '../components/Card'
import data from '../data/data.json'

export default function Project() {

  console.log(data)

  return (
    <section className='project-section'>
      <div className="project-content">
        <h2>Projects</h2>
        <p>From Concept to Deployment <br /> Delivering Customized Web Solutions Tailored to Meet Your Needs</p>
      </div>
      <div className="parent-grid">
        <div className="auto-grid">
          {data.frontendProjects.map((ele, index) => {
            return <Card key={index} props={ele}/>
          })} 
        </div>
      </div>
    </section>
  )
}
