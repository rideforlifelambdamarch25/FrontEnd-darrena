import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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

    login = e => {
        console.log('Click', e.target)
        e.preventDefault();
        this.props
        .login(this.state.credentials)
        .then(() => this.props.history.push('/user/protected'));
    }

    render() {
        console.log('Rendering...')
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.value}
                        onChange={this.login}
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.value}
                        onChange={this.login}
                    />
                    <button>LOGIN</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { userLogin })(Login);