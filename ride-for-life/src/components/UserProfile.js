import React from 'react';

const UserProfile = props => {
    return(
        <div>
            <ul key={id}>
               <p>Name: {user.firstname}</p>
               <p>Phone: {user.phone}</p>
               <p>Location: {user.location}</p>
            </ul>
        </div>
    )
}

export default UserProfile;