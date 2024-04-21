import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function RecipientMode() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button  onClick={handleShow} className="btn btn-dark w-50 rounded-2 check-btn"> Add Recipient</button>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='border  rounded'
      >
        <Modal.Header closeButton>
          <Modal.Title  className="text-center fs-3 m-auto my-4 w-100  fw-bold text-black">Update Recipient</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form.Label className="fs-6 text-secondary">First Name</Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="First Name"  className="border border-3 rounded-3" />
      </FloatingLabel>
      {/* for last name */}
      <Form.Label className="fs-6 text-secondary">Last Name</Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Last Name"  className="border border-3 rounded-3" />
      </FloatingLabel>
      {/* for email */}
      <Form.Label className="fs-6 text-secondary">Email</Form.Label>
      <FloatingLabel
        controlId="floatingInput"
        label="example@email.com"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com"  className="border border-3 rounded-3" />
      </FloatingLabel>
      {/* for number */}
      <Form.Label className="fs-6 text-secondary">Phone Number</Form.Label>
      <InputGroup size="lg" className='mb-5' >
        <InputGroup.Text id="inputGroup-sizing-lg" className='bg-secondary border rounded'>+234</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          className="border border-3 rounded-3"
          placeholder='81 80000000'
        />
      </InputGroup>
      <Button className='btn btn-danger text-white text-center w-100 mb-4 mt-3'>Submit</Button>
        </Modal.Body>
        <Modal.Footer>
        <div className='border rounded  container mb-5'>
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

export default RecipientMode;