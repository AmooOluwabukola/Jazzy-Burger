import React, { useState } from 'react';
import {Link, Outlet } from 'react-router-dom';
import navLogo from "../assets/logo.svg";
import locationLogo from "../assets/Vector3.svg";
import allProductsLogo from "../assets/Vector.svg";
import guestLogo from "../assets/Vector2.svg";
import cartLogo from "../assets/Vector1.svg";
import Bag from '../components/Bag'
import AuthDropDown from '../components/AuthDropDown';
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
const Navbar = ({cartItem}) => {
    const  [authShow, setAuthShow]= useState (false)
    const [bagShow, setBagShow]= useState(false)
    
  return (
    <>
    <main className='container position-relative'>
        <nav className='container d-flex justify-content-between align-items-center'>
        {/* section 1 */}
        <section className='d-flex justify-content-between align-items-center gap-3'>
            <div>
                <Link to='/'>
                    <img src={navLogo} alt="nav-logo" className='img-fluid p-3'/>
                </Link>
            </div>
            {/* div 2 */}
            <div>
                <img src={locationLogo} alt="location-logo"  className='d-none d-lg-block'/>
            </div>
            <h5 className='d-none d-lg-block text-danger mt-2'>Lagos,Nigeria</h5>
        </section>
        {/* section-2 */}
        <section className='d-flex justify-content-between align-items-center gap-3' >
         <img src={allProductsLogo}alt="all-product-logo" />
         <h5 className="d-none d-lg-block text-danger mt-3">All Products</h5>
         {/* div 1 */}
         <div role='button' className='d-flex gap-3 position-relative' onClick={()=>!authShow ? setAuthShow (true):setAuthShow(false)}>
            <img src={guestLogo} alt="guest-logo" />
            <h5 className='d-none d-lg-block mt-3 text-secondary' >Hi, Guest</h5>
           {!authShow ? (
            <div className="div d-none d-lg-block mt-3 text-secondary"><GoChevronDown/></div>
           ):(
            <div className="div d-none d-lg-block mt-3 text-secondary"><GoChevronUp/></div>

           )}
            <div className='position-absolute top-100 end-0 mt-3' >
                {authShow && <AuthDropDown/>}
            </div>
         </div>
         {/* for cart */}
         
         <div role='button' className=' position-relative' onClick={()=>(!bagShow? setBagShow(true):setBagShow(false))} >
         <div className='position-absolute top-0 start-100 translate-middle bg-danger text-light rounded-circle w-75 text-center h-75 fw-bold'>
            <p>{cartItem.length}</p>
         </div>
            <img role='button' src={cartLogo} alt="cart-logo" /></div>
        </section>
        </nav>
        <div className='position-absolute end-0'>{bagShow && <Bag/>}</div>
        <Outlet/>
    </main>
    </>
  )
}

export default Navbar