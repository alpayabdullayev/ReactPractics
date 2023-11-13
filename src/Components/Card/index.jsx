import React from 'react'
import "./index.css"

const Card = ({img,title,desc}) => {
  return (
    <>
        <div className="cardLogo">
            <div className="cardImg">
                <img src={img} alt="" />
            </div>
            <div className="cardContent">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    
    </>
  )
}

export default Card