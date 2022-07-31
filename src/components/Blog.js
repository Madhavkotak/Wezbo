import React from 'react'

function Blog(props) {
  return (
    <div>
      <div className="card" style={{height: "1000px", width: "45rem", margin: "20px", padding: "20px", alignContent: "center" }}>
        <img className="card-img-top" src={props.blogPic} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.i1}</li>
          <li className="list-group-item">{props.i2}</li>
          <li className="list-group-item">{props.i3}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">{props.link}</a>
          <a href="#" className="card-link">{props.link2}</a>
        </div>
      </div>
    </div>
  )
}

export default Blog