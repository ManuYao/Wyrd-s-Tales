import React from 'react'
import { NavLink} from 'react-router-dom'

/**
 * 
 * @author : Yao
 * 
 * @deprecated : Bar de navigation
 */

const Naavigation =() => {
    return (
        <div className="navigation">
            
            <NavLink exact to="/" activeClassName="nav-active">
                Accuiel-WD
            </NavLink>

            <NavLink exact to="Abouts" activeClassName="nav-active">
                A-propos
            </NavLink>

            <NavLink exact to="Maps" activeClassName="nav-active">
                Lieu
            </NavLink>

            <NavLink exact to="Teams">
                Staff
            </NavLink>

        </div>
    );
}
 
export default Naavigation;