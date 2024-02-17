import React from 'react'
import bannerImg2 from '../assets/banner2.png'
import bannerImg3 from '../assets/banner3.png'
import pattern from '../assets/patternImg.png'
import cart from '../assets/icons/cartIcon.png'
function Home() {
    return (
        <div className='row col-12 m-0 home-div '>
            <div className="row col-12 m-0 d-flex flex-column-reverse flex-lg-row px-lg-5 py-0 py-md-5 justify-content-evenly align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-5  py-3 py-md-0 d-flex gap-4 justify-content-center flex-column">
                    <h2 className="lead display-5 fw-bold">Elevate Your Plate with <span className="text-success">GreenBite</span> Wholesome, Organic Goodness  Delivered to Your Doorstep!  </h2>
                    <div className="btn lead fs-5 text-light btn-bg w-fit px-4 rounded-pill d-flex align-items-center gap-2">
                        <img src={cart} alt="cart icon" className='cart-icon' />
                        <span>Explore Now</span>
                    </div>
                </div>
                <div className="col-12 col-md-12 my-5 my-lg-1 col-lg-5 col-lg-5 d-flex justify-content-center justify-content-lg-end align-items-center">
                    <img src={bannerImg2} alt="Banner Img" className='w-100' />
                </div>
                <img src={pattern} alt="banner3 image" className='m-0 w-100 position-absolute pattern-img ' />
            </div>
            <div className="col-12 py-3 gap-3 gap-lg-0 row d-flex flex-row-reverse justify-content-around">
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-center ">
                    <h2 className="lead display-5 fw-bold"><span className="text-warning">Green</span><span className="text-success">Bite!</span></h2>
                    <p className="lead fs-3 ">GreenBite is your passport to a healthier lifestyle. We're not just a delivery service; we're your partner in cultivating a nutritious and delicious culinary journey. Immerse yourself in the freshest, locally sourced organic produce and handpicked ingredients as GreenBite brings the farm to your table.</p>
                    <span className="btn btn-bg px-4 py-2 w-fit rounded-pill my-2 text-light">For More</span>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                    <img src={bannerImg3} alt="banner image" className='w-100' />
                </div>
            </div>
        </div>
    )
}

export default Home
