import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import more_data from "./more_data"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card2 from "./Card2"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
              return <Card key={index} image={value.image} image2={value.image2} image3={value.image3} project={value.project} totalLike={value.totalLike} title={value.title} description={value.description.slice(0, 100)} project_url={value.project_url} live_url={value.live_url} />
            })}
          </div>
        </div>
        <div className='container'>
          <div className='heading text-center'>
            <h5 className="mb-5 text-2xl">More Works</h5>

          <Carousel infinite itemClass=""keyBoardControl minimumTouchDrag={80} className="custom-button" responsive={responsive}>
            {more_data.map((value, index) => {
              return <Card2 key={index} image={value.image} project={value.project} title={value.title}live_url={value.live_url} />
            })}
          </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
