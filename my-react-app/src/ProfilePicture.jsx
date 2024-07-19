import React from 'react';

function ProfilePicture() {
    const imageUrl = 'C:/Users/MUSTA/Desktop/ReactL/my-react-app/src/assets/Picture.PNG'; // Ensure the path is correct\

    const handleClick = (e) => {
    e.target.style.display = "none";

    }

    return <img src={imageUrl} alt="Profile" onClick={ (e) => handleClick(e)} />;
}

export default ProfilePicture;