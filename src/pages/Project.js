import React  from 'react'
import '../spreadsheets/Project.css'
import Card from '../components/Card'
import data from '../data/data.json'

export default function Project() {
  return (
    <section className="project-section">
      <div className="project-content">
        <h2>Projects</h2>
        <p>From concept to deployment, delivering customized web solutions.
        </p>
      </div>
      <p className="project-title bold">"Frontend Projects"</p>
      <div className="parent-grid">
        <div className="auto-grid">
          {data.frontendProjects.map((ele, index) => {
            return <Card key={index} props={ele} />;
          })}
        </div>
      </div>
      <p className="project-title bold">"Backend Projects"</p>
      <div className="parent-grid">
        <div className="auto-grid">
          {data.backendProjects.map((ele, index) => {
            return <Card key={index} props={ele} />;
          })}
        </div>
      </div>
    </section>
  );
}
