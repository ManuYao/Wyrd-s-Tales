import React from 'react'
import { NavLink} from 'react-router-dom'

/**
 * 
 * @author : Yao
 * 
 * @deprecated : Bar de navigation
 */

const Navigation =() => {
    return (
        <div className="navigation">
            
            <NavLink exact to="/">
                Accuiel-WD
            </NavLink>

            <NavLink exact to="Abouts">
                A-propos
            </NavLink>

            <NavLink exact to="Maps">
                Lieu
            </NavLink>

            <NavLink exact to="Teams">
                Staff
            </NavLink>

        </div>
    );
}
 
export default Navigation;