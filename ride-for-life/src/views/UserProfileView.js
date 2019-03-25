import React from 'react';
import { connect } from 'react-redux';
import { userData } from '../actions';

class UserProfileView extends React.Component {
    componentDidMount() {
      console.log('CDM')
    }
    

    render() {
        return (
            <div>

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