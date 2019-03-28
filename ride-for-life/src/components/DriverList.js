import React from 'react';

const DriverList = props => {
    const { firstname, lastname, phone, vehicle_type, location, price } = props.driver
    return(
        <div className="driver-card">
            <ul onClick={() => routeToDriver(props, props.driver)}>
                <p>{firstname} {lastname}</p>
                <p>Phone Number: {phone}</p>
                <p>Vehicle: {vehicle_type}</p>
                <p>location: {location}</p>
                <p>Price: {price}</p>
            </ul>
        </div>
    )
}

const routeToDriver = (props, driver) => {
    props.history.push(`/drivers/${driver.driver_id}`);
}

export default DriverList;