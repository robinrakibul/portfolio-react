import React, { useState } from "react"
import "./header.css"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container px-2 flex justify-between'>
          <div className='logo mt-3 md:mt-2'>
            <a href="/"><img src={logo} className='w-10 mt-1 cursor-pointer' alt='' /></a>
          </div>

          <div className='navlink mt-1 mr-2'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <NavHashLink to='/'>home</NavHashLink>
              </li>
              <li>
                <NavHashLink to='/home#skills'>skills</NavHashLink>
              </li>
              <li>
                <NavHashLink to='/home#portfolio'>projects</NavHashLink>
              </li>
              <li>
                <NavHashLink to='/home#resume'>resume</NavHashLink>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
              <li>
                <NavHashLink to='home#contact'>contact</NavHashLink>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-circle-xmark close'></i> : <i className='fas fa-bars open top-5 right-5'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
