import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Ride For Life</h1>
            <p></p>
            <ul className="login-links">
                <li>
                    <Link to="/user/register">Rider/Caregiver</Link> {''}
                </li>
                <li>
                    <Link to="/driver/login">Driver</Link>
                </li>
            </ul>
        </div>
    )
}


export default Home;