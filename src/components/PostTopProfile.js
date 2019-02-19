import React from 'react';
import logo from '../img/logo.png';

const PostTopProfile = (props) => (
    <div className="content__top">
            <div className="content__top--heading">
                <div className="content__top--heading-info">
                    <img src={logo} alt="Logo" className="content__top--heading-image" />
                    <div className="content__top--heading-handle">
                        <h1>{props.topPost}</h1>
                        <p>{props.topTime}</p>
                    </div>
                </div>
                <div className="content__top--heading-icon">
                    <i className="fas fa-ellipsis-h" />
                </div>
            </div>

        <div className="content__top--data">
            <p>
                Hello Guys, <br />
                <br />
                <br />
                We'd like to say a big thank you to all those who took part in our
                survey &mdash; with the feedback you gave us, we are better equipped
                to take TwoCents to a new sense of what the product should morph
                into; we have learned a lot and have a pretty good understanding
                of... <span class="read-more">Read More</span>
            </p>
        </div>

        <div className="content__top--data-footer">
            <i className="fas fa-thumbs-up" /> 101
        </div>
        </div>

)

export default PostTopProfile;