import React, {useState} from 'react'
export default function Card({props}) {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card ">
      {/* <div style={{height: "10em", backgroundColor: `${props.background}` }} >{props.imgUrl}</div> */}
      <img src={props.imgUrl} alt="/" />
      <div className="card-item">
        <p>
          <span className="secondary-color">Name : </span>
          {props.name}
        </p>
        <div className={!showMore ? "hide" : ""}>
        <p>
          <span className="secondary-color">Description : </span>
          {/* {showMore ? props.description : `${props.description.substring(0, 100)}`}
           */}
          {props.description}
        </p>
        </div>
        <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
        <p>
          <span className="secondary-color">Tech Stack : </span>
          {props.techStack}
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <a href={props.githubUrl}>Github Link</a>
          {props.githubUrlBackend && (
            <a href={props.githubUrlBackend}>Github Backend Link</a>
          )}
          <a href={props.linkedUrl}>Website Link</a>
        </div>
      </div>
    </div>
  );
}
