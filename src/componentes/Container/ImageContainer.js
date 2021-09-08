import React from "react";
import './ImageContainer.css';
import Julio from '../../recursos/plantillas-meme/B6PM55DOKFC5TL5HMRCBEFYQ7A.jpg';

class ImageContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="small"> 
            <h4>Plantilla {this.props.index}</h4>
            <p>{this.props.nombre}</p>            
            <img src={Julio} className="ImageSRC" alt="logo" />
        </div>
        )}
}

export default ImageContainer;
