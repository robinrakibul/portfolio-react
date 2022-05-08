import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow btn_shadow1'>
        <img width='50px' src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
