import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <ul className="footer__list">
            <li className="footer__list--item">
                <Link to="/" className="footer__list--link">
                    <i className="fas fa-home" />
                </Link>
            </li>
            <li className="footer__list--item">
                <Link to="/" className="footer__list--link">
                    <i className="fas fa-envelope" />
                </Link>
            </li>
            <li className="footer__list--item">
                <Link to="/" className="footer__list--link">
                    <i className="fas fa-bell" />
                </Link>
            </li>
            <li className="footer__list--item">
                <Link to="/" className="footer__list--link">
                    <i className="fas fa-cog" />
                </Link>
            </li>
        </ul>
        <h2 className="footer__list--comment">Add Comment</h2>
    </div>
)

export default Footer;