import React from 'react';
import './InputField.css'

const InputField = (props) => {
    return (
        <div className="form-group shadow">
            <input className="form-control"
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    onChange={props.onChange}
                    value={props.value}
                    placeholder={props.placeholder}
                    required={true}       
            />
        </div>
    );
    
}

export default InputField

/*           <div className="form-group shadow">
<input 
    type={this.props.input.toLowerCase()} 
    id={this.props.input.toLowerCase()}
    className="form-control" 
    placeholder={this.props.input} 
    name={this.props.input.toLowerCase()}
/>
</div>*/