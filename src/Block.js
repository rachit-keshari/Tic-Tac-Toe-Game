import React from 'react';
import "./my.css";

const Block =(props)=>{
   
    return (
    <div id="block" onMouseDown={props.click}>{props.value}</div>
    );    

}

export default Block;