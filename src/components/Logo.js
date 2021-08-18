import React from 'react';

function logo(props) {
    return (
        <div className="logo">

            <img src="" alt="logo" />

            <div className="titleLogo">
                <p className="titleT">{props.name}</p>
            </div>

        </div>
    );
}

export default logo;