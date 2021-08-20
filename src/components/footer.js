import React from 'react';
import { useHistory } from 'react-router-dom';


function footer(props) {
    console.log(props)

    const history = useHistory();
    const redirection = () => {
        let url = props.children,
        this.props.history.push(url)
    }

    return (
        <div className="footer" onClick={redirection}>
                <img src={props.imgUrl} alt={props.alt}/>
        </div>
    );
}

export default footer;