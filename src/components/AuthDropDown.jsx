import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInLogo from "../assets/signIn.svg"
import SignUpLogo from "../assets/SignUp.svg"

const AuthDropDown = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <main className="container shadow-lg border rounded bg-light">
        <div className="d-flex flex-column gap-3 m-3">
          {isLoggedIn ? 
            <>
            <div>
            <Link className="btn btn-primary text-ligh f-5" >LogOut</Link>
              <Link className="btn btn-primary text-ligh f-5">Order</Link>
            </div>
               </> : 
            <>
            {/* below for log in div */}
            <div className="d-flex bg-primary border rounded p-2 gap-3" >
                <img src={SignInLogo} alt="log-in-logo" />
            <Link className="btn btn-primary text-ligh f-5 " to="/SignIn">LogIn</Link>
            </div>
               {/* below for sign up div */}
             <div className="d-flex p-2 gap-3 border-danger border  rounded p-2 gap-3">
                <img src={SignUpLogo} alt="sign-up-logo" />
             <Link className="btn  text-danger f-5 fw-bolder" to="/SignUp">SignUp</Link>
             </div>
             </> 
          }
            
        </div>
      </main>
    </>
  );
};

export default AuthDropDown;
