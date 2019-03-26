import React from 'react';


class DriverRegister extends React.Component {
    state = {
        credentials: {
            firstname: '',
            lastname: '',
            phone: '',
            vehicle_type: '',
            location: '',
            username: '',
            password: "password",
            email: '',
            price: ''
        }
    }

    handleChanges = e => {
        console.log('Changing')
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    register = e => {
        console.log('Click', e.target)
        e.preventDefault();
        this.props
        .driverRegister(this.state.credentials)
        .then(() => this.props.history.push('/drivers'));
    }

    render() {
        console.log('Rendering...')
        return (
            <div>
                <form onSubmit={this.login}>
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



export default DriverRegister;