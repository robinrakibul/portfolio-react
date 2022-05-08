import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box hover:text-white hover:bg-blue-700 hover:translate-x-0 duration-500 rounded cursor-pointer border-4 border-white'>
        <div className='d_flex'>
          <div className='title'>
            <h2>{props.institute}</h2>
            <h2 className="font-semibold">{props.exam}</h2>
            <span>Passing Year: {props.year}</span>
            <h2>Major: {props.major}</h2>
          </div>
          <div className='rate'>
            <h2 className="pl-4 pr-4 pt-2 pb-2 rounded">{props.rate}</h2>
          </div>
        </div>
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
