import React from 'react';
import './Button.css'

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <a href="#" className="btn btn-primary btn-sm btn-block">
                {this.props.btnText}
            </a>
        )
    }   
}

export default Button;