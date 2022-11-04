import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function StartingPage() {

    const navigate = useNavigate();

    function userSignUp() {
        navigate('/signUpUser');
    }

    function userLogin() {
        navigate('/logInUser');
    }


    return (
        <Container>
            <div>
                <span>For User</span>
                <span>
                    <button id="signUpUser" onClick={userSignUp}>SignUp</button>
                    <button id="loginUser" onClick={userLogin}>Login</button>
                </span>
            </div>

            {/* <div>
                <span>For Companies</span>
                <span>
                <button id="signUpCompany" onClick={companySignUp}>SignUp</button>
                    <button id="loginCompany" onClick={companyLogin}>Login</button>
                </span>
            </div> */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default StartingPage;