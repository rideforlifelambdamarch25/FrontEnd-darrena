import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Ride For Life</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris.</p>
            <Link to="/user/login">Rider/Caregiver</Link> {''}
            <Link to="/driver/login">Driver</Link>
        </div>
    )
}


export default Home;