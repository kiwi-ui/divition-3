import { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi';
import style from './style.module.css';
import { GiHeartEarrings } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsEnvelopeHeartFill } from "react-icons/bs";
import { IoImages } from "react-icons/io5";

const Navbar = () => {
	const [isSideBarHided,setIsSideBarHided] =useState(false);
	const hideSideBar = () => { 
		setIsSideBarHided(e => !e) 
	};
  const srcollToElement = (id) => {
		const selectedDiv = document.getElementById(id);
		selectedDiv?.scrollIntoView({behavior: 'smooth'});
	};

  return (
      <div className={`position-fixed z10 ${ style.navbarTransition } ${style.z10} bottom-0 w-100`}>
        <button className={`bg-transparent border-0 text-white start-50 translate-middle-x position-absolute ${style.mtm2}`}>
          <BiSolidUpArrow className={`${style.textColorPrimary} fs-2`} onClick={ () => hideSideBar() }/>
        </button>

        <ul className={`${isSideBarHided ? '' : 'd-none'} navbar-nav flex-row justify-content-center px-2 py-3 gap-5 d-flex text-white px-3 px-lg-3 w-100`}>  
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className='nav-link' onClick={ () => srcollToElement('opening') }><AiFillHome className="fs-4"/></button>
            <p className="mb-0">Home</p>
          </li>
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className="nav-link" onClick={ () => srcollToElement('couple') }><GiHeartEarrings className="fs-4"/></button>
            <p className="mb-0">Couple</p>
          </li>
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className="nav-link" onClick={ () => srcollToElement('gallery') }><IoImages className="fs-4"/></button>
            <p className="mb-0">Gallery</p>
          </li>
          <li className="nav-item d-flex justify-content-center flex-column">
            <button className="nav-link" onClick={ () => srcollToElement('wish') }><BsEnvelopeHeartFill className="fs-4"/></button>
            <p className="mb-0">Wishn</p>
          </li>
        </ul>
      </div>
    )
  }
export default Navbar
