import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';


class Login extends React.Component {
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

    // Got this error all of a sudden: TypeError: Cannot read property 'then' of undefined --Fixed!
    login = e => {
        console.log('Click', e.target)
        e.preventDefault();
        this.props
        .userLogin(this.state.credentials)
        this.props.history.push('/drivers');
    }

    render() {
        console.log('Rendering...')
        return (
            <div>
                <h1>Riders/Caregivers</h1>
                <div className="user-login">
                    <form onSubmit={this.login}>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Name, Phone Number, or Email"
                            value={this.state.value}
                            onChange={this.handleChanges}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLoggingIn: state.userLoggingIn
    }
}

export default connect(mapStateToProps, { userLogin })(Login);