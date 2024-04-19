import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import '../styles/CheckOut.css'

const CheckOut = () => {
  useEffect(() => {
    document.title = "Check Out | Page";
  });
  return (
    <>
      <main className="container mt-5">
        <div className="row d-md-flex gap-3 my-5  ">
          <section className="col-md-7 border rounded-4 p-3 ">
            <div className="text-dark fs-">
              <h3>Review and place order</h3>
              <p className=''>
                Review / Add address and fulfill payments to complete your
                purchase
              </p>
            </div>
            <hr />
            <div className="d-md-flex flex-column gap-3">
              <h5>Recipient information</h5>
              <button className="btn btn-dark w-50 rounded-2 check-btn">Add Recipient</button>
            </div>
            <hr />
            <div className="d-md-flex flex-column gap-3">
              <h5>Delivery Address</h5>
              <button className="btn btn-dark w-50 rounded-2">
                Add Delivery Address
              </button>
            </div>
            <hr />
            <button className="btn btn-success mb-3 w-100 check-btn">
              Place Your Order
            </button>
          </section>

          {/* section two */}
          <section className="col-md-4 border rounded-4 p-3 ">
            <h5 className="fw-bold">Your order from</h5>
            <hr />
            <div className="d-flex justify-content-between">
              <h6 className="text-danger fw-bold">
                Double Grilled Chicken Burger
              </h6>
              <RiDeleteBin6Line className="text-secondary" />
              <p>N 12000.0</p>
            </div>
            <div className="d-flex justify-content-between  border rounded box">
              <button className="border rounded text-danger btnbox align-items-center w-25 "><FaMinus /></button>
              <h4 className="text-center">3</h4>
              <button className="border rounded text-danger btnbox w-25 "><FaPlus /></button>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Items total:</h6>
              <p>N12000.0</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Discount:</h6>
              <p>N 0</p>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Delivery Charge:</h6>
              <p>N 0.0</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6 className="fw-bold">Total:</h6>
              <h6 className="fw-bold">N 12000</h6>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default CheckOut;