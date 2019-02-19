import React from 'react';
import face2 from "../img/face2.jpeg";
import face3 from "../img/face3.jpeg";
import face6 from "../img/face6.jpeg";

const AsideRightProfile = (props) => (
    <div>
    <div className="asideright-top__profile">
    <div className="asideright-top__profile--info">
        <div className="asideright-top__profile--info__container">
            <img 
                src={face2}
                alt="Avatar"
                className="asideright-top__profile--info__image"
            />
            <div className="asideright-top__profile--info__handle">
                <h1>{props.profileOne}</h1>
                <p>{props.titleOne}</p>
            </div>
        </div>
    </div>
    <div className="asideright-top__profile--info-btn">
        <button className="outline__btn small">follow</button>
    </div>
    <span><i className="fas fa-times" /></span>
</div>

<div className="asideright-top__profile">
    <div className="asideright-top__profile--info">
        <div className="asideright-top__profile--info__container">
            <img 
                src={face3}
                alt="Avatar"
                className="asideright-top__profile--info__image"
            />
            <div className="asideright-top__profile--info__handle">
                <h1>{props.profileTwo}</h1>
                <p>{props.titleTwo}</p>
            </div>
        </div>
    </div>
    <div className="asideright-top__profile--info-btn">
        <button className="outline__btn small">follow</button>
    </div>
    <span><i className="fas fa-times" /></span>
</div>

<div className="asideright-top__profile">
    <div className="asideright-top__profile--info">
        <div className="asideright-top__profile--info__container">
            <img 
                src={face6}
                alt="Avatar"
                className="asideright-top__profile--info__image"
            />
            <div className="asideright-top__profile--info__handle">
                <h1>{props.profileThree}</h1>
                <p>{props.titleThree}</p>
            </div>
        </div>
    </div>
    <div className="asideright-top__profile--info-btn">
        <button className="outline__btn small">follow</button>
    </div>
    <span><i className="fas fa-times" /></span>
</div>
    </div>
)

export default AsideRightProfile;