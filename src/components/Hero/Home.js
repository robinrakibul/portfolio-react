import React from "react"
import "./Home.css"
import hero from "../../images/hero.png"
import skill2 from "../../images/fiverr.png"
import skill3 from "../../images/behance.png"
import Typewriter from 'typewriter-effect';
import 'flowbite';
import 'tw-elements';
import Features from "../Features/Features"
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Research from "../Research/Research";
import Contact from "../Contact/Contact";
import Particle from "../Particles/Particle"


const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex'>
          <div className='left'>
            <h3 className="head-text">Welcome to my portfolio</h3>
            <h2 className="mt-5">
              Hi, I'm <span>Rakibul Hassan</span>
            </h2>
            <div className="typewriter-text">
              <h2>
                A&nbsp;
                <div className="inline-block text-2xl md:text-3xl lg:text-3xl">
                  <Typewriter options={{
                    strings: ['Junior Web Developer', 'Frontend Developer', 'Web Designer',],
                    autoStart: true,
                    loop: true,
                  }}
                  />
                </div>
              </h2>
            </div>
            <p className="pr-10 md:pr-5">
              I am a web developer from Dhaka, Bangladesh. My expertise is in front-end web development. I know ReactJs, NodeJs, Express MongoDB, etc.
              I have a beautiful taste in technology.
              I have done a full stack web development course from programming hero to getting certified and now I am ready to put myself in working sectors.
            </p>

            <a href="https://drive.google.com/file/d/1yppXc_QMkVyvbgUj52f_cN3mEhzS3RVy/view?usp=sharing" target="_blank" rel="noreferrer"><button type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-mdb-ripple="true" data-mdb-ripple-color="light">Download Resume</button></a>
          </div>
          <div className='right'>
            <div className='right_img mb-32 md:mb-0'>
              <img className="container cursor-pointer hover:scale-90 duration-500" src={hero} alt='' />
            </div>
          </div>
        </div>

        <div className='flex flex-wrap container'>
          <div>
            <h4 className="mt-16">Find Me Online:</h4>
            <div className='mt-2'>
              <a href="https://www.facebook.com/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow p-2'>
                  <i className='fab fa-facebook-f text-blue-500'></i>
                </button>
              </a>
              <a href="https://www.facebook.com/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow p-2'>
                  <i className='fab fa-instagram text-orange-500'></i>
                </button>
              </a>
              <a href="https://www.twitter.com/robinrakibul_" target='_blank' rel="noreferrer">
                <button className='btn_shadow p-2'>
                  <i className='fab fa-twitter text-orange-500'></i>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow'>
                  <i className='fab fa-linkedin text-blue-500'></i>
                </button>
              </a>
              <a href="https://github.com/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow'>
                  <i className='fab fa-github text-black'></i>
                </button>
              </a>
              <a href="https://www.fiverr.com/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow'>
                  <img className="fab" width='20px' src={skill2} alt="" />
                </button>
              </a>
              <a href="https://www.behance.net/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow'>
                  <img className="fab" width='20px' src={skill3} alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Portfolio />
      <Resume />
      <Research />
      <Contact />
      <Particle></Particle>
    </>
  )
}

export default Home
