import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import JazzyLogo from "../assets/logo.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";


const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [isReveal, setIsReveal] = useState(false);
  function handleToggle() {
    !isReveal ? setIsReveal(true) : setIsReveal(false);
  }

  useEffect(() => {
    document.title = "SignUp |Page";
  });
  return (
    <>
      <main className="containervh-50 d-flex flex-column my-3 ">
        <div>
          <div className="text-center ">
            <Link to='/'>
            <img src={JazzyLogo} alt="" className="mx-auto d-block " />
            </Link>
            
            <h6 className="text-center fs-3 m-auto my-4 w-75  fw-bold">
              CREATE YOUR ACCOUNT
            </h6>
          </div>
          <Form className="w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
            {/* For First name */}
            <Form.Label className="fs-6 text-secondary">First Name</Form.Label>
            <FloatingLabel className="mb-3">
              <Form.Control
                type="text"
                placeholder="First name"
                className="border border-3 rounded-3 "
                {...register("text", { required: true })}
              />
              {errors.text && (
                <span className="text-danger">This field is required</span>
              )}
            </FloatingLabel>
            {/* For Last Name  */}
            <Form.Label className="fs-6 text-secondary">Last Name</Form.Label>
            <FloatingLabel className="mb-3">
              <Form.Control
                type="text"
                placeholder="Last name"
                className="border border-3 rounded-3"
                {...register("text", { required: true })}
              />
              {errors.text && (
                <span className="text-danger">This field is required</span>
              )}
            </FloatingLabel>
            {/* Email */}
            <Form.Label className="fs-6 text-secondary">
              Email address
            </Form.Label>
            <FloatingLabel className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                className="border border-3 rounded-3"
                {...register("email", { required: true })}
              />
            </FloatingLabel>
            {/* Phone Number */}
            <Form.Label className="fs-6 text-secondary">
              Phone Number
            </Form.Label>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">+234</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className="border border-3 rounded-3 position-relative"
              />
            </InputGroup>
            {/* Password */}
            <Form.Label className="fs-6 text-secondary ">Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type={isReveal ? "text" : "password"}
                placeholder="Password"
                className="border border-3 rounded-3 position-relative"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-danger">Please input password</span>
              )}
              <p
                className="position-absolute end-0 top-0 mt-3 me-3"
                role="button"
                onClick={handleToggle}
              >
                {isReveal ?  <ImEyeBlocked  />: <ImEye />
}
              </p>
            </FloatingLabel>
            {/* Confirm Password */}
            <Form.Label className="fs-6 text-secondary">
              Confirm Password
            </Form.Label>
            <FloatingLabel className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                className="border border-3 rounded-3 position-relative"
              />
              {errors.text && (
                <span className="text-danger">This field is required</span>
              )}
              <p
                className="position-absolute end-0 top-0 mt-3 me-3"
                role="button"
                onClick={handleToggle}
              >
                {isReveal ?  <ImEyeBlocked  />: <ImEye />
}
              </p>
            </FloatingLabel>
            {/* Checkbox */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>
            {/* SignUp btn */}
            <Button variant="danger" type="submit" className="w-100 fw-bold">
              Create account
            </Button>
            <div className="text-center mt-4">
              <span>
                <strong>Have an account?</strong>
              </span>{" "}
              <Link className="f-5 fw-bolder text-decoration-none" to="/SignIn">
                Sign In
              </Link>
            </div>
            <div className="text-center mt-2">
              <span>
                By Creating your Quickmunch account, you agree to the{" "}
                <Link
                  className="f-5 fw-light text-decoration-none"
                  to="/SignIn"
                >
                  Terms of use{" "}
                </Link>{" "}
                and{" "}
                <Link
                  className="f-5 fw-light text-decoration-none"
                  to="/SignIn"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
