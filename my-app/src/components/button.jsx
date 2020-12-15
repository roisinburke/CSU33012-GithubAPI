import React from 'react';

const Button = (props) => {
    return (
        <button className='button' onClick={()=>{props.handleClick()}}>Enter a Username!</button>
    )
  };

export default Button;