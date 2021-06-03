import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return(
        <div className="HomePage">
            <div className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Pritam</span>
                </h1>
                <p className="h-sub-text">I am a self taught web developer. ReactJS is my primary tech stack.
                I also love combat sports, gaming and anime. ϞϞ(๑⚈ ․̫ ⚈๑)∩</p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;