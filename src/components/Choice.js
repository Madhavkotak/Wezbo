import React from 'react';
import "./choice.css";

function Choice(props) {
  const getchoice = async (cod, mech, chem, elec) => {
    console.log("handle choice was clicked");

    const opt = [];
    const data = await fetch(
      `http://localhost:3001/getchoice`,

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Coding: cod,
          Mechanics: mech,
          Chemistry: chem,
          Electronic: elec,
        }),
      }
    ).then((response) => {
      response.json();
    });
    // data.forEach((item) => {
    //   opt.push(item);
    // });

    console.log(data);
    props.setchoice(opt);
  };
  const handlechoice = async () => {
    const cod = document.getElementById("cod").checkek ? true : false;
    const mech = document.getElementById("mech").checkek ? true : false;
    const chem = document.getElementById("chem").checkek ? true : false;
    const elec = document.getElementById("elec").checkek ? true : false;
    await getchoice(cod, mech, chem, elec);
  };
  return (
    <div className="Barno">
    <div className="chcl">
      <div className="opt1">
      Coding? <input type="checkbox" id="cod" style={{height:"20px",width:"20px"}} />
      </div>
      <div className="opt1">
      Mechanics? <input type="checkbox" id="mech" style={{height:"20px",width:"20px"}}/> </div>
      <div className="opt1"> Chemistry? <input type="checkbox" id="chem" style={{height:"20px",width:"20px"}} /></div>
      <div className="opt1">
      Electronic? <input type="checkbox" id="elec" style={{height:"20px",width:"20px"}} /> </div>
      <br/>
    </div>
      <div className="btnch">
      <button className="btn my-5 btn-primary" onClick={handlechoice}>
        Get branch
      </button>
      </div>
  </div>
  );
}

export default Choice;
