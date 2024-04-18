import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';


const Home = () => {
    useEffect(()=>{
     document.title = 'Home |Page'
    })
  return (
    <>
   <main className='container'>
    <Hero/>
    <Product/>
    </main>
    </>
  )
}

export default Home