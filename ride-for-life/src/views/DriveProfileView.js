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
                        <h1>{driver.firstname}</h1>
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