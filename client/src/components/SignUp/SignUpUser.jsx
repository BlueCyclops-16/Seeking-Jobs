import React from "react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./style.css";

function SignUpUser() {

  const navigate = useNavigate();

  const [userData, setUser] = useState({
    name: "", email: "", password: "", cpassword: ""
  });


  const handleInputs = (event) => {
    console.log(event);
    var field = event.target.name;
    var val = event.target.value;
    setUser({ ...userData, [field]: val });
  }

  const sendData = async (event) => {
    event.preventDefault();

    const { name, email, password, cpassword } = userData;

    const response = await fetch("/signUpUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, cpassword
      })
    });

    
    const data = await response;

    console.log(data);
    

    if (response.status === 422 || !data) {
      window.alert("Invalid Request");
      console.log("Invalid Request");
    }
    else {
      window.alert("Successfully Registered");
      console.log("Successfully Registered");
      navigate('/logInUser');
    }
  }


  return (
    <>
      <section className='signup'>
        <div className='main-container'>
          <div className='signup-content'>
            <div className='signpic-container'>
              <NavLink to="/login" className="signin-link"> Already Registered?</NavLink>
            </div>
            <div className='signup-form'>
              <h2 className='title'> Sign Up</h2>
              <form method="POST" className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor="name">
                    <i className='zmdi zmdi-account material-icons-name'></i>
                  </label>

                  <input type="text" name="name" id="name" autoComplete="off"
                    value={userData.name}
                    onChange={handleInputs}
                    placeholder="your name" />
                </div>

                <div className='form-group'>
                  <label htmlFor="email">
                    <i className='zmdi zmdi-email material-icons-name'></i>
                  </label>

                  <input type="email" name="email" id="email" autoComplete="off"
                    value={userData.email}
                    onChange={handleInputs}
                    placeholder="your email" />
                </div>

                <div className='form-group'>
                  <label htmlFor="password">
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label>

                  <input type="password" name="password" id="password" autoComplete="off"
                    value={userData.password}
                    onChange={handleInputs}
                    placeholder="your password" />
                </div>

                <div className='form-group'>
                  <label htmlFor="cpassword">
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label>

                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                    value={userData.cpassword}
                    onChange={handleInputs}
                    placeholder=" Confirm your password" />
                </div>

                <div className='form-group form-button'>
                  {/* <button type="submit" name="signup" id="signup" className='btn' value="Register"
                    onClick={sendData} /> */}
                    <button onClick={sendData}>Sign Up</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>

    // {/* <div className="loginBox">
    //   <h1>Sign Up</h1>


    //   <form method="POST" action="/signUpUser">
    //     <FormContainer>
    //       <input required type="text" name="Fname" id="Fname" placeholder="Full Name" />
    //       <input required type="email" name="email" id="email" placeholder="Email" />
    //       <input required type="password" name="password" id="pass" placeholder="Password" />
    //       <input required type="password" name="confirmPassword" id="cpass" placeholder="Confirm Password" />
    //       <br />
    //       <Button variant="contained">Sign Up</Button>
    //     </FormContainer>
    //   </form>
    //   <p>
    //     Aleady have an account? <br />
    //     <a href="/">Log in here</a>
    //   </p>
    // </div> */}
  );
};


// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   input {
//     padding: 5px;
//     border-radius: 5px;
//     border-color: white;

//   }
// `;

export default SignUpUser;