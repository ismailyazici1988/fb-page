import React from 'react';
import "./Main.css";
import Card from "../Card/Card";
import data from "../../assests/data";

const Main = () => {
  return (
    <div className="container_main">
      {data.map((item)=><Card {...item}/>)}  
    </div>
  )
}

export default Main