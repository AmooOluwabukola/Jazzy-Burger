import React from 'react'
import { Link } from "react-router-dom";
import JazzyLogo from '../assets/logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const SignUp = () => {
  return (
    <>
   <div className='container '>
    <div className=' container mx-auto d-block mt-5  w-lg-50 shadow-sm border p-3'>
    <div className='m-4 '>
      <img src={JazzyLogo} alt="" className='mx-auto d-block ' />
      <h6 className='text-center my-5  fw-bold'>CREATE YOUR ACCOUNT</h6>
    </div>
    <Form>
    <Form.Group className="mb-3"  >
        <Form.Label >First Name</Form.Label>
        <Form.Control type="text" placeholder="First name"  size="lg"  />
      </Form.Group>
      <Form.Group className="mb-3"  >
        <Form.Label >Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last name"  size="lg"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="example@mail.com"  size="lg"  />
      </Form.Group>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">+234</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  size="lg" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  size="lg" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me signed in" />
      </Form.Group>
      <Button variant="danger" type="submit" className='w-100 fw-bold'>
       Create account
      </Button>
      <div className='text-center mt-4'>
      <span><strong>Have an account?</strong></span> <Link className="f-5 fw-bolder text-decoration-none" to="/SignIn">Sign In</Link>
      </div>
      <div className='text-center mt-2'>
      <span >By Creating your Quickmunch account, you agree to the <Link className="f-5 fw-light text-decoration-none" to="/SignIn">Terms of use </Link> and <Link className="f-5 fw-light text-decoration-none" to="/SignIn">Privacy Policy</Link></span>
      </div>
      </Form>
    </div>
    
    </div>
    </>
    
  )
}

export default SignUp