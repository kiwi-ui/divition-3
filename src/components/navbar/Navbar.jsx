import { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { BiHomeAlt2, BiEnvelopeOpen,BiSolidUpArrow } from 'react-icons/bi';
import { RiGalleryLine } from 'react-icons/ri';
import style from './style.module.css';

const Navbar = () => {
	const [isSideBarHided,setIsSideBarHided] =useState(false);
	const hideSideBar = () => { setIsSideBarHided(e => !e) };

  return (
      <div className={`position-fixed z10 ${style.navbarTransition} ${style.z10} bottom-0 w-100`}>
        <button className={`bg-transparent border-0 text-white start-50 translate-middle-x position-absolute ${style.mtm2}`}>
          <BiSolidUpArrow className={`${style.textColorPrimary} fs-2`} onClick={ () => hideSideBar() }/>
        </button>

        <ul className={`${isSideBarHided ? '' : 'd-none'} navbar-nav flex-row justify-content-center px-2 py-3 gap-5 d-flex text-white px-3 px-lg-3 w-100`}>  
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className='nav-link justify-content-center'><BiHomeAlt2 className="fs-4"/></button>
            <p className="mb-0">Home</p>
          </li>
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className="nav-link"><BsCalendar className="fs-4"/></button>
            <p className="mb-0">Calendar</p>
          </li>
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className="nav-link"><RiGalleryLine className="fs-4"/></button>
            <p className="mb-0">Gallery</p>
          </li>
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className="nav-link"><BiEnvelopeOpen className="fs-4"/></button>
            <p className="mb-0">Harapan</p>
          </li>
        </ul>
      </div>
    )
  }
export default Navbar
