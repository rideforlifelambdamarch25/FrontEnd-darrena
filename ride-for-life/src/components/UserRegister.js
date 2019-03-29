import React from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../actions';
import '../index.css'


class UserRegister extends React.Component {
    state = {
        users: {
            firstname: '',
            phone: '',
            location: '',
       }
    }

    handleChanges = e => {
        this.setState({
            users: {
                ...this.state.users,
                [e.target.name]: e.target.value
            }
        })
    }

    // Got this error all of a sudden: TypeError: Cannot read property 'then' of undefined ---Fixed!
    register = e => {
        console.log('Click', e.target)
        e.preventDefault();
        const newUser= {
            firstname: this.state.users.firstname,
            phone: this.state.users.phone,
            location: this.state.users.location
        }
        console.log(newUser)
        this.props
        .userRegister(newUser)
        this.props.history.push('/users');
    }

    render() {
        console.log('Rendering...')
        return (
            <div className="user-register">
                <form onSubmit={this.register}>
                    <input 
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={this.state.value}
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.state.value}
                        onChange={this.handleChanges}
                        required
                    />
                    <input 
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={this.state.value}
                        onChange={this.handleChanges}
                        required
                    />
                    <button type="submit">Register</button>
                    {/* <button type="reset">Reset</button> */}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { userRegister } )(UserRegister);