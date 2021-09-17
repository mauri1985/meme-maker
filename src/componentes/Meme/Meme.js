import React from 'react';
import './Meme.css'
import Button from '../Button/Button';

class Meme extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card ">
                <div class="card-header">
                    {this.props.name}
                </div>
                <img className="card-img-top" src={this.props.url} alt="Meme Maker"/>
                <div className="card-body">                                    
                    <div className="MemeDesc">
                        <p><a href={this.props.url} target="_blank">Ampliar imagen</a></p>
                        <p>Widht: {this.props.width} | Height: {this.props.height}</p>  
                        <Button btnText='Seleccionar'/>                      
                    </div>
                </div>
            </div>            
        )
    }   
}

export default Meme;