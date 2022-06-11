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

              <div className='content justify-center align-middle w-full md:w-2/3'>
                {ResumeApi.map((val, id) => {
                  return <Card key={id} category={val.category} exam={val.exam} institute={val.institute} major={val.major} year={val.year} rate={val.rate} desc={val.desc} />
                }
                )}
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='heading'>
                <h1>Skills</h1>
              </div>
              <div className='content justify-center align-middle w-full md:w-2/3'>
                <ol className="box hover:text-white hover:bg-blue-700 hover:translate-x-0 duration-500 rounded cursor-pointer border-4 border-white">
                  <li><b>Expert skills:</b> HTML, CSS, JavaScript, ES6, REST API, Bootstrap, Tailwind, React, Single Page Application, React Router, React Hook, React Hook Form</li>
                  <li><b>Familiar with:</b>  NodeJs, ExpressJs, MongoDB, React Hook Form, Jsonwebtoken, React Query, Stripe, Axios</li>
                  <li><b>Tools:</b>  Visual Studio Code, Github, Netlify, Postman, Firebase, Chrome dev-tool, Heroku, Figma, Adobe Xd</li>
                  <li>
                    <b>Other skills:</b>
                    <li>Ui/Ux Designing with Adobe XD/Figma Application, Adobe applications for graphics designing,</li>
                    <li>Programming Languages: C, C++, JavaScript,</li>
                    <li>Have experience in Linux OS such as Ubuntu, Kali Linux,</li>
                    <li>Report writing and research,</li>
                  </li>

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
