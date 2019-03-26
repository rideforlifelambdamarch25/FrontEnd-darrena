import React from 'react';
import { connect } from 'react-redux';
import {driverLogin } from '../actions';


class DriverLogin extends React.Component {
    state = {
        credentials: {
            userLoginQuery: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        console.log('Click', e.target)
        e.preventDefault();
        this.props
        .driverLogin(this.state.credentials)
        .then(() => this.props.history.push('/driver/protected'));
    }

    render() {
        console.log('Rendering...')
        return (
            <div className="driver-login">
                <form onSubmit={this.login}>
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
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        driverLoggingIn: state.driverLoggingIn
    }
}

export default connect(mapStateToProps, { driverLogin })(DriverLogin);