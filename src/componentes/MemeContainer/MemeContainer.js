import React from 'react';
import './MemeContainer.css';
import Meme from '../Meme/Meme';
import { getMemesFromInternet } from '../../services/memes';

class MemeContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            memes: [],
            loading: true
        }
    }

    async componentDidMount(){
        const responseJSON = await getMemesFromInternet();
        this.setState({ memes: responseJSON.data.memes, loading: false });
    }

    render(){
        if(this.state.loading)
            return <h5>Cargando...</h5>
            
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