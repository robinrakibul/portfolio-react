import React, { useState } from "react"

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
        <div className='title'>
          <h2>{props.title}</h2>
        </div>
        <a href={props.live_url} target="_blank" rel="noreferrer">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Live Website
            </span>
          </button>
        </a>
      </div>

      {/* Popup box
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content flex flex-col md:flex-row lg:flex-row'>
            <div className='w-2/3 md:w-max'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text'>
              <span>About This Project</span>
              <p className="font-bold mt-3">{props.title}</p>
              <p>{props.description}... <a className="text-blue-500 hover:text-blue-600 font-light" href={props.project_url + '/blob/main/README.md'}>Read More</a></p>
              <div className='button'>
                <a href={props.project_url}><button className="btn_shadow">
                  Check Project<i className='fas fa-chevron-right'></i>
                </button></a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  )
}

export default Card
