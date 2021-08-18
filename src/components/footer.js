import React from 'react';
import { NavLink} from 'react-router-dom'

function footer(props) {
    console.log(props)

    return (
        <div>
            <NavLink className="footer" exact to="">
                <img src={props.imgUrl} alt={props.alt}/>
            </NavLink>
        </div>
    );
}

export default footer;