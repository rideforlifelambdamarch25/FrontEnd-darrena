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
          <div className="driver-info">
              <h1>Driver Profile</h1>
              <p>{driver.firstname} {driver.lastname}</p> 
              <p>{driver.email}</p>
              <p>{driver.phone}</p>
              <p>{driver.vehicle}</p>
              <p>{driver.price}</p>
          </div>
          <div>
            <h3>Leave a comment</h3>
            <form>
              <label for="name">Name:
                <input 
                  type="text"
                  onChange={()=>{}}
                  value={()=>{}}
                />
              </label> 
              <label for="comment">Comment:
              <textarea rows="4" cols="50" name="comment" form="usrform">
Enter text here...</textarea>
              </label>
              <button>Submit Comment</button>
            </form>
          </div>
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