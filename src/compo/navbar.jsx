import React, { useState } from 'react'
import logo from '../assets/mainLogo.svg'
import { GiHamburgerMenu as BurgerBtn } from "react-icons/gi";
import { RxCross2 as Cross} from "react-icons/rx";
function Navbar() {
    const desktopStyle="col-10 col-lg-9 d-lg-flex justify-content-evenly justify-content-lg-end d-none"
    const mobileStyle="bg-light d-flex flex-column p-0 py-5 gap-1 position-absolute top-0 start-0 navbar-mobile"
    const [mobileView, setMobileView] = useState(desktopStyle)
    const burgerClick = () => {
        setMobileView(mobileStyle)
    }
    const crossClick=()=>{
        setMobileView(desktopStyle)
    }
    return (
        <div className='m-0 row col-12 px-5 py-3 p-0 d-flex justify-content-between align-items-center navbar-div'>
            <div className="col-4 col-lg-2 link d-flex justify-content-left">
                <img src={logo} alt="Logo image" className="navbar-logo" />
            </div>
            <div className={`${mobileView}`}>
                <div className="col-12 d-lg-none d-flex justify-content-center py-2">
                    <img src={logo} alt="Logo image" className="img-fluid pb-3" />
                </div>
                <span className="position-absolute cross-btn d-lg-none fs-1 fw-bold" onClick={crossClick}><Cross/></span>
                <ul className="d-lg-flex d-flex flex-column flex-lg-row gap-5 gap-lg-4 bg-light justify-content-between align-items-center p-0 m-0">
                    <li className='fs-5 fw-bold d-flex justify-content-center align-items-center h-fit ' onClick={crossClick}>Home</li>
                    <li className='fs-5 fw-bold d-flex justify-content-center align-items-center h-fit ' onClick={crossClick}>Product</li>
                    <li className='fs-5 fw-bold d-flex justify-content-center align-items-center h-fit ' onClick={crossClick}>Testimonials</li>
                    <li className='fs-5 fw-bold d-flex justify-content-center align-items-center h-fit ' onClick={crossClick}>About Us</li>
                    <li className='fs-5 fw-bold d-flex justify-content-center align-items-center h-fit ' onClick={crossClick}>Contact Us</li>
                    <li className='fs-5 fw-bold d-flex justify-content-center align-items-center btn btn-bg rounded-pill h-fit px-4 mx-3' onClick={crossClick}>Login</li>
                </ul>
            </div>
            <span className="col-1 fs-2 d-lg-none h-fit w-fit d-flex align-items-center justify-content-center" onClick={burgerClick}><BurgerBtn/></span>
        </div>
    )
}

export default Navbar