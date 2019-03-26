import React from 'react';
import { connect } from 'react-redux';
import { userData } from '../actions';

class UserProfileView extends React.Component {
    componentDidMount() {
      console.log('CDM')
      this.props.getData();
    }
    

    render() {
        return (
            <div>
                <h1>Riders</h1>
                {this.props.users.map((user, id) => (
                    <ul key={id}>
                        <h1>{user.firstname}</h1>
                    </ul>
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