import React from 'react'
import "./index.css"

const FoodsCard = ({img,date,title}) => {
  return (
    <>
    
    <div className="col-4 card">
                <div className="card-img">
                  <img src={img} alt="" />
                </div>
                <div className="card-content">
                  <p>{date}</p>
                  <div className="link">
                    <a href="">{title}</a>
                  </div>

                  <div className="readMore">
                    <div className="buttonReadMore">
                      <a href="">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
    
    </>
  )
}

export default FoodsCard