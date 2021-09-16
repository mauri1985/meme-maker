import React from "react";
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className='Header'>
                <h2>Meme Generator!</h2>
            </nav>
        );
    }
}

export default Header;