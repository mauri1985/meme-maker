import React from "react";
import './ImageContainer.css';

class ImageContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="imageContainer"> 
            <h2>Plantilla {this.props.index}</h2>
            <h3>{this.props.nombre}</h3>            
        </div>
        )}
}

export default ImageContainer;
