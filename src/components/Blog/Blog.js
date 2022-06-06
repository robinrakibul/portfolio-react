import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import 'tw-elements'
import researchImg from "../../images/research.jpg"
import fiverrProfileImg from "../../images/fiverr_profile_img.jpg"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='research'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CHECK MY RESEARCH WORKS AND FIVERR PROFILE</h4>
            <h1 className="font-bold mb-4">My Research And Freelancing</h1>

            <div className="flex justify-around flex-wrap mt-3 mb-3">
              <div className="duration-300 mb-10 flex flex-col justify-center bg-white p-10 rounded-3xl mt-5">
                <img src={researchImg} className="hover:scale-90 justify-start mb-3" alt="" />
              <br />
              <a href="https://www.researchgate.net/profile/Md-Rakibul-Hassan-Robin" target="_blank" rel="noopener noreferrer">
              <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3" data-mdb-ripple="true" data-mdb-ripple-color="light">Check My Researches</button></a>
              </div>
              <div className="fiverrImg duration-300 mb-10 flex flex-col justify-center bg-white p-10 rounded-3xl mt-5">
                <img src={fiverrProfileImg} className="hover:scale-90 justify-start mb-3" alt="" />
                <p className="text-black flex justify-start">Fiverr Seller</p>
                <small className="flex justify-start mb-3">Programming & Tech</small>
                <ul class="flex">
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-300 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-300 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-300 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-300 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="faHalf" data-icon="star" class="w-4 text-yellow-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7zM288 376.4L288.1 376.3L399.7 435.9L378.4 309.6L469.2 219.8L343.8 201.4L288.1 86.85L288 87.14V376.4z"></path>
                    </svg>
                </li>
              </ul>
              <br />
              <a href="https://www.fiverr.com/robinrakibul" target="_blank" rel="noopener noreferrer"><button className="text-white bg-[#35c350] hover:bg-[#29973d] focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 mt-3" data-mdb-ripple="true" data-mdb-ripple-color="light">Check my gigs</button></a>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Blog
