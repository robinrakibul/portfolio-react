import React from "react"
import "./Home.css"
import hero from "../../images/hero.png"
import skill2 from "../../images/fiverr.png"
import skill3 from "../../images/behance.png"
import { Typewriter } from "react-simple-typewriter"
import 'flowbite';
import 'tw-elements';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex'>
          <div className='left'>
            <h3 className="head-text mt-32 md:mt-10">Welcome to my portfolio</h3>
            <h2>
              Hi, I'm <span>Rakibul Hassan</span>
            </h2>
            <h2>
              A Web
              <span>
                <Typewriter words={[" Developer", " Designer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>
              I am a web developer from Dhaka, Bangladesh. My expertise is in front-end web development. I know ReactJs, NodeJs, Express MongoDB, etc.
              I have a beautiful taste in technology.
              I have done a full stack web development course from programming hero to getting certified and now I am ready to put myself in working sectors.
            </p>
            
            <button type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-mdb-ripple="true" data-mdb-ripple-color="light">Get In Touch</button>
          </div>
          <div className='right'>
            <div className='right_img px-15 mb-32 md:px-4 md:mb-0'>
              <img className="container mx-4 md:w-full w-100 cursor-pointer hover:scale-90 duration-500" src={hero} alt='' />
            </div>
          </div>
        </div>

        <div className='flex container'>
          <div>
            <h4 className="mt-16">Find Me On Social Sites</h4>
            <div className='mt-2'>
              <a href="https://www.facebook.com/robinrakibul" target='_blank'>
                <button className='btn_shadow'>
                  <i class='fab fa-facebook-f text-blue-500'></i>
                </button>
              </a>
              <a href="https://www.facebook.com/robinrakibul" target='_blank'>
                <button className='btn_shadow ml-5'>
                  <i class='fab fa-instagram text-orange-500'></i>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/robinrakibul" target='_blank'>
                <button className='btn_shadow ml-0 mt-5 md:ml-5 md:mt-0'>
                  <i class='fab fa-linkedin text-blue-500'></i>
                </button>
              </a>
            </div>
          </div>
          <div>
            <h4 className="ml-10 mt-16">Find My Works</h4>
            <div className="mt-2">
              <a href="https://github.com/robinrakibul" target='_blank'>
                <button className='btn_shadow ml-10'>
                  <i class='fab fa-github text-black'></i>
                </button>
              </a>
              <a href="https://www.fiverr.com/robinrakibul" target='_blank'>
                <button className='btn_shadow ml-5'>
                  <img className="fab" width='20px' src={skill2} alt="" />
                </button>
              </a>
              <a href="https://www.behance.net/robinrakibul" target='_blank'>
                <button className='btn_shadow mt-5 ml-10 md:ml-5 md:mt-0'>
                  <img className="fab" width='20px' src={skill3} alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
