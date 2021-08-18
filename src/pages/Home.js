import React, { Component } from 'react';
import Naavigation from '../components/Navigation';
import Logo from '../components/Logo'

class Home extends Component {
    render() {
        return (

            <div className = "home">
            
                  <Naavigation />  
                
                <div className="home_static">
                  
                    <Logo name=""/>
                    <h1>L'aventure Wyrd's Tales</h1>
                    <p>Sous titre :)</p>
                    
                </div>

            </div>
        );
    }
}

export default Home;