import React from "react";
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Meme Generator!</span>
                </div>
                <form className="d-flex ">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className ="btn btn-outline-success" type ="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Header;