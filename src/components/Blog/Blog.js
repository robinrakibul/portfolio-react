import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import research from "../../images/research.jpg";

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CHECK MY RESEARCH WORKS</h4>
            <h1 className="font-bold mb-4">My Research</h1>

            <a href="https://www.researchgate.net/profile/Md-Rakibul-Hassan-Robin" target="_blank">
              <div className="researchimg flex justify-center hover:scale-105 duration-300 mb-4">
                <img src={research} alt="" />
              </div>
            </a>
            <br />
            <a href="https://www.researchgate.net/profile/Md-Rakibul-Hassan-Robin" target="_blank"
              className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-72" data-mdb-ripple="true" data-mdb-ripple-color="light">Check my researchgate</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
