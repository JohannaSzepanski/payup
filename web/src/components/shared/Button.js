import React from "react";

const Button = (props) => {
  
  const login = () => {
    return props.onButtonClick();   
  }

  return (
    <button className="pu-btn-blue" onClick={ login }>
      { props.title }
    </button>
  );
}


export default Button;