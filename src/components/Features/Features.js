import React from "react"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='container top' id='skills'>
        <div>
          <div className='heading text-center'>
            <h4>FEATURES</h4>
            <h1>What I Do</h1>
          </div>

          <div className='grid ml-5 mr-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 cursor-pointer'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
