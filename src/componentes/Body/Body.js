import React from "react";
import './Body.css';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        fetch('')
    }
    render(){
        return(
            <div className='Body'>
                <h3>Body</h3>
            </div>
        )
    }
}

export default Body;