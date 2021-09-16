import React from "react";
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className='Header'>
                <h3>Meme Generator!</h3>
            </nav>
        );
    }
}

export default Header;