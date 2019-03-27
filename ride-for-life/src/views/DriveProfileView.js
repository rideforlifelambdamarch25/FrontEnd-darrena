import React from 'react';
import { connect } from 'react-redux';
import { driverData } from '../actions';

class DriverProfileView extends React.Component {
    componentDidMount() {
      console.log('CDM')
      this.props.driverData();
    }
    

    render() {
        return (
            <div>
                <h1>Driver</h1>
                {this.props.drivers.map((driver, id) => (
                    <ul key={id}>
                        <p>Name: {driver.firstname} {driver.lastname}</p>
                        <p>Phone Number: {driver.phone}</p>
                        <p>Vehicle: {driver.vehicle_type}</p>
                        <p>location: {driver.location}</p>
                        <p>Price: {driver.price}</p>
                    </ul>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        drivers: state.drivers
    }
}

export default connect(mapStateToProps, { driverData })(DriverProfileView);