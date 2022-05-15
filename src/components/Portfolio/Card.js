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
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
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
                  Check Project<i class='fas fa-chevron-right'></i>
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
