import React from 'react';
import './MemeContainer.css';
import Meme from '../Meme/Meme';

class MemeContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            memes: [],
            loading: true
        }
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then( response => response.json())
            .then( memesJson => this.setState({ memes: memesJson.data.memes, loading: false }))
    }

    render(){
        if(this.state.loading)
            return 'Cargando...'
            
        return(
            <div className="MemeContainer">
                {
                    this.state.memes.map(function(meme){
                        return <Meme 
                            {...meme} 
                            key={meme.id}
                        />
                    })
                }                                
            </div>
        )
    }
    
}

export default MemeContainer;