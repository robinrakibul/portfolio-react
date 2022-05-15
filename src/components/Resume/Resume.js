import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CHECK MY RESUME TO KNOW ME BETTER</h4>
            <h1 className="font-bold">My Resume</h1>
            <h5 className="mt-5 text-2xl">Education Quality And Expertise</h5>
          </div>

          <div className='content-section top'>
            <div className='flex-col'>
              <div className='heading'>
                <h4>2014-2021</h4>
                <h1>Education Quality</h1>
              </div>

              <div className='content justify-center align-middle w-2/3'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} category={val.category} exam={val.exam} institute={val.institute} major={val.major} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='heading'>
                <h1>Expertise</h1>
              </div>
              <div className='content justify-center align-middle w-2/3'>
                <ol className="box hover:text-white hover:bg-blue-700 hover:translate-x-0 duration-500 rounded cursor-pointer border-4 border-white">
                  <li>I am specialized in web development</li>
                  <li>I am very good at HTML, CSS, JavaScript, Bootstrap, Tailwind, ReactJs, MongoDb</li>
                  <li>Have Knowledge on NodeJS, Express, ES6</li>
                  <li>I can make websites responsive</li>
                  <li>Used figma, adobe xd for Ui design</li>
                  <li>Proficiency in programming language C and C++</li>
                  <li>Have experience working in Linux OS</li>
                  <li>Proficiency in database management</li>
                  <li>I am very good at english</li>
                  <li>Proficiency in Microsoft office and Adobe applications</li>
                  <li>Very good skill in report writing and research</li>
                </ol>
                <div>
                  <h1 className="text-2xl mt-5 mb-5">Language Preference</h1>
                </div>
                <div className="box hover:text-white hover:bg-blue-700 hover:translate-x-0 duration-500 rounded cursor-pointer border-4 border-white">
                  <div className="">
                    <p>Bangla - Native/Bilingual</p>
                    <p>English - Fluent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
