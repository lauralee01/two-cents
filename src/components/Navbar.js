import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Button from './Button';

import face1 from "../img/face1.jpeg";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="Nav">
                <div className="Nav__container">
                    <Header />
                        <div className="Nav__right">
                            <ul className="Nav__item-wrapper">
                                <li className="Nav__item">
                                    <Link className="Nav__link" to="/">Home</Link>
                                </li>
                                <li className="Nav__item">
                                    <Link className="Nav__link" to="/">Sessions</Link>
                                </li>
                                <li className="Nav__item">
                                    <Link className="Nav__link" to="/">Topics</Link>
                                </li>
                            </ul>
                    <Search />
                            <div className="Navbar__messages">
                                <i className="fas fa-envelope Nav__messages--icon"></i>
                            </div>
                                <i className="fas fa-bell Nav__messages--icon" />
                                <img
                                    src={face1}
                                    alt="Display Pic"
                                    className="Navbar__messages--image"
                                />
                    <Button className="Navbar__post">
                        New Post
                    </Button>
                        </div>
                </div>
            </nav>
        )
    }
}