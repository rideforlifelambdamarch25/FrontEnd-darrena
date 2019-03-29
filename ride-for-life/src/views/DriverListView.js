import React from 'react';
import { connect } from 'react-redux';
import { driverData } from '../actions';
import DriverList from '../components/DriverList';
import '../index.css'

class DriverListView extends React.Component {
    // state = {
    //     searchData: []
    // }
    componentDidMount() {
      console.log('CDM')
      this.props.driverData();
    }


    
    searchBarHandler = e => {
        const drivers = this.state.drivers.filter( driver => {
          if(driver.location.includes(e.target.value)) {
            return driver
          } else {
            return null
          }
        });
        this.setState({
          location: drivers
        })
      }

    render() {
        return (
            <div>
                <h1>Request A Ride</h1>
                <input 
                    type="text"
                    name="location"
                    placeholder="🔍 Search " 
                    onChange={this.searchBarHandler}
                    value={this.value}
                />
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
    console.log('Map state', state)
    return {
        drivers: state.drivers
    }
}

export default connect(mapStateToProps, { driverData })(DriverListView);