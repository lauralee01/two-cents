import React from 'react';
import { Link } from 'react-router-dom';

const AsideRightFooter = () => (
    <div className="asideright__footer">
        <ul className="asideright__footer--list">
            <li className="asideright__footer--list-item">
                <Link to="/">About</Link>
            </li>
            <li className="asideright__footer--list-item">
                <Link to="/">Contact</Link>
            </li>
            <li className="asideright__footer--list-item">
                <Link to="/">FAQs</Link>
            </li>
            <li className="asideright__footer--list-item">
                <Link to="/">Blog</Link>
            </li>
            <li className="asideright__footer--list-item">
                <Link to="/">Legal</Link>
            </li>
        </ul>
    </div>
)

export default AsideRightFooter;