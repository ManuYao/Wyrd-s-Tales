import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo'
class Home extends Component {
    render() {
        return (
            <div className = "home">
                <Navigation />
                <Logo />
                <h1>Bienvenue sur L'aventure Wyrd's Tales</h1>
                <p>Sous titre :)</p>
            </div>
        );
    }
}

export default Home;