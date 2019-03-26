import React from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../actions';


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

    register = e => {
        console.log('Click', e.target)
        e.preventDefault();
        const newUser= {
            firstname: this.state.firstname,
            phone: this.state.phone,
            location: this.state.location
        }
        this.props
        .userRegister(newUser)
        .then(() => this.props.history.push('/user'));
    }

    render() {
        console.log('Rendering...')
        return (
            <div className="user-register">
                <form onSubmit={this.register}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="First Name"
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
                        name="location"
                        placeholder="Location"
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
        users: state.users
    }
}

export default connect(mapStateToProps, { userRegister } )(UserRegister);