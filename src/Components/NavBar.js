import React from 'react';
import avatar from '../img/avatar.jpg';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="NavBar">

            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            about
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            blogs
                        </NavLink>
                    </li>
                </ul>
            <footer className="footer">
                <p>@2021 Pritam Debnath</p>
            </footer>
            
            </nav>

        </div>
    )
}

export default NavBar;