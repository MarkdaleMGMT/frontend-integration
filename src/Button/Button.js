import React from 'react';
import './Button.css'

const Button = (props) => {
        return (
            <button 
                className="btn btn-rounded"
                onClick={props.action}
                >
                {props.title}
            </button>
        );
}

export default Button