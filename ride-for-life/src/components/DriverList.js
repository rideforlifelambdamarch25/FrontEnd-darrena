import React from 'react';

const DriverList = props => {
    const { firstname, lastname, phone, vehicle_type, location, price } = props.driver
    return(
        <div>
            <ul>
                <p>Name: {firstname} {lastname}</p>
                <p>Phone Number: {phone}</p>
                <p>Vehicle: {vehicle_type}</p>
                <p>location: {location}</p>
                <p>Price: {price}</p>
            </ul>
        </div>
    )
}



export default DriverList;