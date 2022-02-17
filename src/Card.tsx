import React from 'react';

const Card = ()=> {
  return <div style={{border:"1px solid red", height:"500px", width:"500px"}}>
      <div style={{backgroundColor:"orange", borderRadius:"50%", height:"100px", width:"100px",position:"absolute"}}></div>
      <div style={{backgroundColor:"yellow", borderRadius:"50%", height:"50px", width:"50px",position:"absolute"}}></div>
  </div>;
}

export default Card;
