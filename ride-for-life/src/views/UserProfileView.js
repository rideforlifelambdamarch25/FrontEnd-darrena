import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userData } from '../actions';
import UserProfile from '../components/UserProfile';

class UserProfileView extends React.Component {
    componentDidMount() {
      console.log('CDM')
      this.props.userData();
    }
    

    render() {
        console.log('User Rendering...')
        return (
            <div className="rider-list">
                <h1>Riders</h1>
                {this.props.users.map((user, id) => (
                    <ul key={id}>
                        <p>Name: {user.firstname}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Location: {user.location}</p>
                    
                <Link to={`/users/${user.user_id}`}><UserProfile user={user}/>
                </Link></ul>
                ))}

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { userData })(UserProfileView);