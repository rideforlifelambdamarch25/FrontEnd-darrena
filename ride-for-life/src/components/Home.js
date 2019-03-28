import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Ride For Life</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris.</p>
            <ul className="login-links">
                <li>
                    <Link to="/user/login">Rider/Caregiver</Link> {''}
                </li>
                <li>
                    <Link to="/driver/login">Driver</Link>
                </li>
            </ul>
        </div>
    )
}


export default Home;