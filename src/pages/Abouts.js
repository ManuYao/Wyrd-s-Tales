import React from 'react';
import Logo from '../components/Logo'
import Navigation from '../components/Navigation';
import Foooter from '../components/footer';

function Abouts() {
    return (
        <div className="about">
            <Navigation/>

        <div className="aprops">
            
            <Logo name="Wyrd's Tales"/>
            
            <h1>A propos de WD</h1>

            <p></p>
        <div className="lien_social">
            
            <Foooter
            link="/" 
            imgUrl=""
            alt='img_Discord'
            />
             <Foooter 
            imgUrl=""
            alt='img_Twitter'
            />
             <Foooter 
            imgUrl=""
            alt='img_Youtube'
            />
        </div>
        </div>
    </div>
    );
}

export default Abouts;