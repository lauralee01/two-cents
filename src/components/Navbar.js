import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Button from './Button';

import pic1 from "../img/pic1.jpg";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav__container">
                    <Header />
                        <div className="nav__right">
                            <ul className="nav__item-wrapper">
                                <li className="nav__item">
                                    <Link className="nav__link" to="/">Home</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/">Sessions</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/">Topics</Link>
                                </li>
                            </ul>
                        </div>
                    <Search />
                            <div className="nav__messages">
                                <i className="fas fa-envelope nav__messages--icon nav__icon" />
                            </div>
                                <i className="fas fa-bell nav__messages--icon" />
                                <img
                                    src={pic1}
                                    alt="Display Pic"
                                    className="nav__messages--image"
                                />
                    <Button className="nav__post">
                        New Post
                    </Button>
                </div>
            </nav>
        )
    }
}