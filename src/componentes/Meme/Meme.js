import React from 'react';
import './Meme.css'

class Meme extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="Meme">
                <h3>{this.props.name}</h3>
                <img src={this.props.url} alt='ReactJS'/>
                <p><a href={this.props.url} target="_blank">Abrir imagen</a></p>
                <div className="MemeDesc">
                    <p>Widht: {this.props.width} | Height: {this.props.height}</p>
                </div>
            </section>
        )
    }   
}

export default Meme;