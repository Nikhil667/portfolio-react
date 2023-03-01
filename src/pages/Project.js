import React from 'react'
import '../spreadsheets/Project.css'
import Card from '../components/Card'

export default function Project() {
  return (
    <section className='project-section'>
      <div className="project-content">
        <h2>Projects</h2>
        <p>From Concept to Deployment <br /> Delivering Customized Web Solutions Tailored to Meet Your Needs</p>
      </div>
      <div className="parent-grid">
        <div className="auto-grid">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}
