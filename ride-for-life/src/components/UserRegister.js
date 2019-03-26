import React from 'react';

class UserRegister extends React.Component {
    state = {
            firstname: '',
            phone: '',
            location: '',
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

    userRegister = e => {
        console.log('Click', e.target)
        e.preventDefault();
        this.props
        .userLogin(this.state.credentials)
        .then(() => this.props.history.push('/user/protected'));
    }

    render() {
        console.log('Rendering...')
        return (
            <div>
                <form onSubmit={this.login}>
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



export default UserRegister;