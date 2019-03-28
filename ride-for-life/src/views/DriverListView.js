import React from 'react';
import { connect } from 'react-redux';
import { driverData } from '../actions';
import DriverList from '../components/DriverList';
import '../index.css'

class DriverListView extends React.Component {
    componentDidMount() {
      console.log('CDM')
      this.props.driverData();
    }
    
    

    render() {
        return (
            <div>
                <h1>Driver</h1>
                <div className="driver-list">
                {this.props.drivers.map(driver => (
                    <DriverList key={driver.driver_id} driver={driver}/>
                ))}
                </div>
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

export default connect(mapStateToProps, { driverData })(DriverListView);