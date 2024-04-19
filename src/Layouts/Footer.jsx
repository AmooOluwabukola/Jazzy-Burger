import React from 'react';
import Group27 from '../assets/question1.svg';
import Vector from '../assets/lock.svg';
import '../styles/Footer.css'
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube1.svg';
import otherImage1 from '../assets/apple.svg'; 
import otherImage2 from '../assets/playstore.svg';


const Footer = () => {
  return (
    <>
      <footer className='bg-black py-2'> 
        <section className='container my-4 footer-section'>
          <div className='d-lg-flex justify-content-between  gap-4'>
           
            {/* parent div */}
            <div className='d-flex justify-content-between  flex-column-reverse flex-lg-row'>
                 {/* Images for 24/7 support */}
            <div className='d-lg-flex text-white'>
              <img src={Group27} alt="" />
              <h4 className=' mx-2 fs-3'>24/7 <span className='support'>Support</span></h4>
              
            </div>
            <div className='d-lg-flex text-white'>
              <img src={Vector} alt="" />
              <h4 className=' mx-2 fs-2'>100%   <span className='payment'>Payment Secured</span></h4>
            </div>
            </div>
            
            {/* Add your two new images for links */}
            <div className='d-lg-flex gap-4 w-50'>
              <img src={otherImage1} alt="Appstore" className='stores' />
              <img src={otherImage2} alt="Playstore" className='stores' />
            </div>
          </div>

          {/* Contact Information */}
          <div className='container mt-3 txt'>
            <p className='text-light'>Need Help</p>
            <h2 className='text-light fs-6'>+234 907 466 6655</h2>
            <h2 className='text-light fs-6'>help@jazzysburger.com</h2>
          </div>

          {/* Social Media Icons */}
          <div className='container mt-5'>
            <h1 className='text-light fs-6'>FOLLOW US</h1>
            <div className='d-flex  socials'>
              {/* Added classes for specifying height and width */}
              <img src={facebook} alt="" className='img-fluid social-icon'/>
              <img src={twitter} alt="" className='img-fluid social-icon'/>
              <img src={instagram} alt="" className='img-fluid social-icon'/>
              <img src={youtube} alt="" className='img-fluid social-icon '/>
            </div>
          </div>
        </section>
      </footer>
      <p className="text-center">&copy; JJB Concepts <span className="fw-bolder fs-3"> . </span> Developed by our Digital LLC </p>
    </>
  )
}

export default Footer