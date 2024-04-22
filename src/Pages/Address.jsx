import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function Address() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const states = ["Lagos", "Abuja"]; // Static list of states
  const citiesByState = {
    Lagos: [
      "Ikeja",
      "Lekki",
      "Victoria Island",
      "Lagos Island",
      "Epe",
      "Ikorodu",
      "Akesan",
      "Badagry",
      "Ojo",
      "Surulere",
      "Ajah",
      "Yaba",
      "Shomolu",
      "Apapa",
      "Amuwo Odofin",
      "Oshodi",
      "Alimosho",
      "Mushin",
      "Agege",
    ],
    Abuja: [
      "Wuse",
      "Garki",
      "Asokoro",
      "Lokogoma",
      "Galadimawa",
      "Kado",
      "Mpape",
      "Jahi",
      "Durumi",
      "Lugbe",
      "Nyanya",
      "Karu",
      "Utako",
      "Jabi",
      "Kubwa",
      "Gwarinpa",
      "Wuse 2",
      "Maitama",
      "Central Business District (CBD)",
    ],
  }; // Define cities for each state

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(citiesByState[state]);
  };
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
          <Modal.Title className="text-center fs-3 m-auto my-4 w-100  fw-bold text-black">
            Add Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* State */}
          <Form.Label className="fs-6 text-secondary">Select State</Form.Label>
          <FloatingLabel controlId="floatingSelect">
            <Form.Select
              aria-label="Floating label select example"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value=" ">Select State</option>
              {states.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </Form.Select>
          </FloatingLabel>

          {/* City */}
          <Form.Label className="fs-6 text-secondary">Select City</Form.Label>
          <FloatingLabel controlId="floatingSelect" className="mb-2">
            <Form.Select aria-label="Floating label select example">
              <option value=" ">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
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
