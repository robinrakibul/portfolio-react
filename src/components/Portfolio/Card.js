import React, { useState } from "react"
import 'tw-elements'

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow'>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.project}</span>
          <label>
            <i className='fa-solid fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <h2 onClick={toggleModal}>{props.title}</h2>
        <div className='title inline-flex'>
          <a href={props.live_url} target="_blank" rel="noreferrer">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Live Website
              </span>
            </button>
          </a>
          <a href='#popup' onClick={toggleModal}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-green-500 group-hover:from-green-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Show Details
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal max-h-full'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content flex flex-col md:flex-row lg:flex-row'>
            <div className='w-full md:mt-10 md:w-2/3'>
              {/* Modal Image Carousel */}
              <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                  <div className="carousel-item active relative float-left w-full">
                    <img
                      src={props.image}
                      className="block w-full"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src={props.image2}
                      className="block w-full"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item relative float-left w-full">
                    <img
                      src={props.image3}
                      className="block w-full"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className='modal-text w-full mt-5 md:w-2/3'>
              <p className="font-bold mt-3">{props.project}</p>
              <h5 className="font-bold mt-6">{props.title}</h5>
              <br />
              <p>{props.description}... <a  className="text-blue-500 hover:text-blue-600 font-light" href={props.project_url + '/blob/main/README.md'} target="_blank" rel="noreferrer">Read More</a></p>
              <div className='button flex justify-center mt-10'>
                <a href={props.project_url} target="_blank" rel="noreferrer"><button className="btn_shadow">
                  Check Project<i className='fas fa-chevron-right'></i>
                </button></a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
