import React from "react";

function Department(props) {
  return (
    <div className="bnc" style={{ 

      margin: "5px",
      display: "flex",
      alignItems: "center" 
       }}>
      <div
        className="card my-15"
        style={{
          display: "flex",
          height: "600px",
          width: "18rem",
          margin: "20px",
        }}
      >
        <img
          className="card-img-top"
          src={`${props.imageLink}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.deptName}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="#" className="btn btn-primary">
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Department;
