import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
function Address() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="btn btn-dark w-50 rounded-2 check-btn text-center"
      >
        Add Delivery Address
      </button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* State */}
          <Form.Label className="fs-6 text-secondary">Select State</Form.Label>
          <FloatingLabel controlId="floatingSelect">
            <Form.Select aria-label="Floating label select example">
              <option>Select State</option>
              <option value="1">Lagos</option>
              <option value="2">Abuja</option>
            </Form.Select>
          </FloatingLabel>
          {/* City */}
          <Form.Label className="fs-6 text-secondary">Select City</Form.Label>
          <FloatingLabel controlId="floatingSelect" className="mb-2">
            <Form.Select aria-label="Floating label select example">
              <option>Select City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          {/* House Number */}
          <Form.Label className="fs-6 text-secondary">House Number</Form.Label>
          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control type="text" className="border border-3 rounded-3" />
          </FloatingLabel>
          {/* Street */}
          <Form.Label className="fs-6 text-secondary">Street</Form.Label>
          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control type="text" className="border border-3 rounded-3" />
          </FloatingLabel>

          <Button className="btn btn-danger text-white text-center w-100 mb-4 mt-3">
           Use This Address
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <div className="border rounded  container mb-5">
            <div className="d-flex justify-content-between text-secondary mt-2">
              <h6>Total:</h6>
              <p>N10500.0</p>
            </div>
            <div className="d-flex justify-content-between  text-secondary">
              <h6>Discount:</h6>
              <p>N 0</p>
            </div>
            <div className="d-flex justify-content-between  text-secondary">
              <h6>Delivery Charge:</h6>
              <p>N 0.0</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between ">
              <h6 className="fw-bold">Total:</h6>
              <h6 className="fw-bold">N 10500.0</h6>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Address;
