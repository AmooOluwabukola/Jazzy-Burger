import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import JazzyLogo from "../assets/logo.svg";
import { useForm } from "react-hook-form"
const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  const [isReveal, setIsReveal]=useState(false);
  function handleToggle (){
    !isReveal ? setIsReveal (true):setIsReveal(false)
  }

  useEffect(() => {
    document.title = "Login |Page";
  });
  return (
    <>
      <main className="container vh-50 d-flex flex-column my-3">
        <div>
          <div className="text-center ">
            <Link>
              <img src={JazzyLogo} alt="" className="mx-auto d-block " />
            </Link>
            <h6 className="text-center fs-3 m-auto my-4 w-75  fw-bold">
              SIGN IN TO YOUR ACCOUNT
            </h6>
          </div>

          <Form className="w-75 m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* input for email */}
            <Form.Label className="fs-6 text-secondary">Email</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                className="border border-3 rounded-3"
                {...register("email" ,  { required: true })}
              />
               {errors.password && <span className="text-danger">This field is required</span>}
            </FloatingLabel>
            {/* input for password */}
            <Form.Label className="fs-6 text-secondary ">Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type={isReveal? 'text': 'password'}
                placeholder="Password"
                className="border border-3 rounded-3 position-relative"
                {...register("password", { required: true })}
                
                />
                {errors.password && <span className="text-danger">This field is required</span>}
              <p className="position-absolute end-0 top-0 mt-3 me-2" role="button" onClick={handleToggle}>{ isReveal ? 'hide' : 'show' }</p>
            </FloatingLabel>
            {/* checkbox */}
            <div className="mt-3 d-flex justify-content-between">
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={"Keep me signed in"}
                    className="fs-6 fw-bold"
                  />
                </div>
              ))}
                <Link className="f-5 fw-bolder text-decoration-none" to="/">
                Reset Password
              </Link>
            </div>
          
          
            <Button variant="danger" type="submit" className="w-100 fs-3 text-white btn btn-danger">
              Sign In
            </Button>
            <div className="text-center mt-3 ">
              <span>
                <strong>Don't have an account?</strong>
              </span>{" "}
              <Link className=" fw-bolder text-decoration-none" to="/SignUp">
                Create One
              </Link>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
};

export default SignIn;
