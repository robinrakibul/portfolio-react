import React from "react"

const Card = (props) => {
  return (
      <div className='box bg-white border-2 border-gray-200 rounded-xl p-5'>
        <img width='50px' className="mb-3" src={props.image} alt='' />
        <h2 className="mb-3">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
  )
}

export default Card
