import React from 'react';
import { withRouter } from 'react-router-dom';

const DriverList = props => {
    const { firstname, lastname, phone, vehicle_type, location, price } = props.driver
    return(
       <div>
            <div onClick={() => routeToDriver(props, props.driver)} className="driver-card">
                <ul>
                    <p>{firstname} {lastname}</p>
                    <p>Phone Number: {phone}</p>
                    <p>Vehicle: {vehicle_type}</p>
                    <p>Location: {location}</p>
                    <p>Price: {price}</p>
                </ul>
            </div>
            <button>Request Driver</button>
        </div>
    )
}

const routeToDriver = (props, driver) => {
    props.history.push(`/driver/profile/${driver.driver_id}`);
}

export default withRouter(DriverList);