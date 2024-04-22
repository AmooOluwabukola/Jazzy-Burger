import React from "react";

import { useState, useEffect } from "react";
import JazzyImg from "../assets/jazzyimg.png";
import Card from 'react-bootstrap/Card';
import Cheese from '../assets/cheese.png';
import Bread from '../assets/bread.png';
import Lettuce from '../assets/lettuce.png';
import Egg from '../assets/egg.png';
import Onion from '../assets/onion.png';
import Add from '../assets/add1.png';
import Heart from '../assets/heart.svg';
import "../styles/Product.css"
import Spinner from 'react-bootstrap/Spinner';
const Product = () => {
  const [isLoading,setIsLoading] = useState(false)

  const [data, setData] = useState([]);
  const fetchReq = async () => {
    try {
      setIsLoading(true)
      const request = await fetch(
        "https://jazzy-mern.onrender.com/api/products"
      );
      const response = await request.json();
      console.log(response);
      setData(response.products);
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log(data);
  useEffect(() => {
    fetchReq();
  }, []);
  return (
    <>
      {isLoading && <> <Spinner animation="border" class="text-center" />; </>}
      <main className=" my-5 row">
        <div className="d-none d-lg-block col-lg-3">
          <img className="w-100 h-100 " src={JazzyImg} alt="jazzy-img" />
        </div>
        <div className="col-lg-9">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 ">
          {data.map((datum) => {
            const {
              _id,
              title,
              description,
              image,
              category,
              price,
              _v,
              createdAt,
              updatedAt,
            } = datum
            
            return (

                <Card  key={_id} className="card-inner rounded-4  position-relative">
                <Card.Img variant="top" src={image} />
                <Card.Img className="w-25 position-absolute top-0 end-0 rounded-pill p-3" variant="top" src={Heart} />
                
                <Card.Body>
                  <h6>{title}</h6>
                  <p className="text-secondary">Total Price</p>
                  <h5>₦{price}.0</h5>

                  <img src={Cheese}alt="" />
                  <img src={Onion} alt="" />
                  <img src={Lettuce}alt="" />
                  <img src={Bread} alt="" />
                  <img src={Egg} alt="" />
                </Card.Body>
                
                <Card.Body>
                <button className="btn btn-danger w-100 text-center"><img src={Add}  alt="" className="me-2" />Add To Cart</button>
                
                </Card.Body>
              </Card>
            );
          })}
        </div>
        </div>
        
      </main>
    
    </>
  );
};

export default Product;
