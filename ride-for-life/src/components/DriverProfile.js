import React from 'react';
import { connect } from 'react-redux';
import { driverData } from '../actions';

class DriverProfile extends React.Component {
    componentDidMount() {
        console.log('CDM')
        // this.setState({drivers: this.props.driverData()})
        this.props.driverData();
      }
    // state = {drivers: []}
    
    render() {
    const id = this.props.match.params.id;
    console.log(this.props);
    const driver = this.props.drivers.find(driver => driver.driver_id == id);
    console.log(driver);
    return (
        <div>
            <h1>Driver Profile</h1>
            <p>{driver.firstname}</p> 
            <p></p>
            <p></p>
        </div>
    )
    }
}

const mapStateToProps = state => {
    console.log(state.drivers)
    return {
      drivers: state.drivers
    }
  }

export default connect(mapStateToProps,{ driverData })(DriverProfile);