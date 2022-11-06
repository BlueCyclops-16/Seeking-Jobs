import React from "react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SignUpCompany() {

    const navigate = useNavigate();

    const [companyData, setCompany] = useState({
        companyname: "", email: "", password: "", cpassword: ""
    });


    const handleInputs = (event) => {
        console.log(event);
        var field = event.target.name;
        var val = event.target.value;
        setCompany({ ...companyData, [field]: val });
    }

    const sendData = async (event) => {
        event.preventDefault();

        const { companyname, email, password, cpassword } = companyData;

        const response = await fetch("/signUpCompany", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                companyname, email, password, cpassword
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
            navigate('/logInCompany');
        }
    }


    return (
        <>
            <section className='signup'>
                <div className='main-container'>
                    <div className='signup-content'>
                        <div className='signpic-container'>
                            <NavLink to="/loginCompany" className="signin-link"> Already Registered?</NavLink>
                        </div>
                        <div className='signup-form'>
                            <h2 className='title'> Company Sign Up</h2>
                            <form method="POST" className='register-form' id='register-form'>
                                <div className='form-group'>
                                    <label htmlFor="name">
                                        <i className='zmdi zmdi-account material-icons-name'></i>
                                    </label>

                                    <input type="text" name="companyname" id="name" autoComplete="off"
                                        value={companyData.name}
                                        onChange={handleInputs}
                                        placeholder="Company Name" />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="email">
                                        <i className='zmdi zmdi-email material-icons-name'></i>
                                    </label>

                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={companyData.email}
                                        onChange={handleInputs}
                                        placeholder="Company email" />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="password">
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>

                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={companyData.password}
                                        onChange={handleInputs}
                                        placeholder="Password" />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="cpassword">
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>

                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={companyData.cpassword}
                                        onChange={handleInputs}
                                        placeholder=" Confirm password" />
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


    );
};




export default SignUpCompany;