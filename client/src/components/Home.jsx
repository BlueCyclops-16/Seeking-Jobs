import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInUser from "./LogInUser/LogInUser";
import SignUpUser from "./SignUp/SignUpUser";
import StartingPage from "./StartingPage/StartingPage"


function Home(props) {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<StartingPage />} />
                    <Route path="/signUpUser" element={<SignUpUser />} />
                    <Route path="/logInUser" element={<LogInUser />} />
                </Routes>
            </Router>


        </div>
    )
}



export default Home;