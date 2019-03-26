import React from 'react';
import { connect } from 'react-redux';
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

    register = e => {
        console.log('Click', e.target)
        e.preventDefault();
        const newDriver = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            vehicle_type: this.state.vehicle_type,
            location: this.state.location,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            price: Number(this.state.price)
        }
        this.props
        .driverRegister(newDriver)
        .then(() => this.props.history.push('/drivers'));
    }

    render() {
        console.log('Rendering...')
        return (
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
                        name="vehicle"
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
        )
    }
}

const mapStateToProps = state => {
    return {
        drivers: state.drivers
    }
}


export default connect(mapStateToProps, { driverRegister } )(DriverRegister);