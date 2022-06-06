import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import more_data from "./more_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1 className="font-bold">My Projects</h1>
            <h5 className="mt-5 text-2xl">Full Stack Projects</h5>
          </div>

          <div className='content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} project={value.project} totalLike={value.totalLike} title={value.title} description={value.description.slice(0,100)} project_url={value.project_url} live_url={value.live_url}/>
            })}
          </div>
        </div>
        <div className='container'>
          <div className='heading text-center'>
            <h5 className="mt-5 text-2xl">Frontend Projects</h5>
          </div>

          <div className='content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {more_data.map((value, index) => {
              return <Card key={index} image={value.image} project={value.project} totalLike={value.totalLike} title={value.title} description={value.description.slice(0,100)} project_url={value.project_url} live_url={value.live_url}/>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
