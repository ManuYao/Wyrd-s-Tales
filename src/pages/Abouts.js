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
            <Foooter imgUrl='irl'
                     alt='testAlt'
                    >https://github.com/ManuYao/ReactRemember/blob/main/src/components/Event_State1/Use_Event.js
            </Foooter>
        </div>
        
        </div>
    </div>
    );
}

export default Abouts;