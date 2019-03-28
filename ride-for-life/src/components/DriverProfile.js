import React from 'react';
import { connect } from 'react-redux';
import { driverData } from '../actions';

class DriverProfile extends React.Component {
    componentDidMount() {
        console.log('CDM')
        this.props.driverData();
      }
      
    render() {
    const id = this.props.match.params.id;
    const driver = this.props.drivers.find(driver => `${driver.driver_id}` === id);
    return (
        <div>
            <h1>Driver Profile</h1>
            <p></p>
            <p></p>
        </div>
    )
    }
}

const mapStateToProps = state => {
    console.log(state.driver)
    return {
      drivers: state.drivers
    }
  }

export default connect(mapStateToProps,{ driverData })(DriverProfile);