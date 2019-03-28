import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { driverRegister } from '../actions';


class DriverRegister extends React.Component {
    state = {
        drivers: {
            firstname: '',
            lastname: '',
            phone: '',
            vehicle_type: '',
            location: '',
            username: '',
            password: '',
            email: '',
            price: ''
        }
    }

    handleChanges = e => {
        this.setState({
            drivers: {
                ...this.state.drivers,
                [e.target.name]: e.target.value
            }
        })
    }

    // Got this error all of a sudden: TypeError: Cannot read property 'then' of undefined --Fixed!
    register = e => {
        console.log('Click', e.target)
        e.preventDefault();
        const newDriver = {
            firstname: this.state.drivers.firstname,
            lastname: this.state.drivers.lastname,
            phone: this.state.drivers.phone,
            vehicle_type: this.state.drivers.vehicle_type,
            location: this.state.drivers.location,
            username: this.state.drivers.username,
            password: this.state.drivers.password,
            email: this.state.drivers.email,
            price: Number(this.state.drivers.price)
        }
        this.props
        .driverRegister(newDriver)
        this.props.history.push('/drivers');
    }

    render() {
        console.log('Rendering...')
        return (
            <div>
                <Link exact to="/">Home</Link>
                <Link exact to="/driver/login">Driver Login</Link>
                <h1>Driver Registration</h1>
                <div className="driver-register">
                    <form onSubmit={this.register}>
                        <input 
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="text"
                            name="vehicle_type"
                            placeholder="Vehicle Type"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <button type="submit">Register</button>
                        <button type="reset">Reset</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        drivers: state.drivers
    }
}


export default connect(mapStateToProps, { driverRegister } )(DriverRegister);