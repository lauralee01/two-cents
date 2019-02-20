import React from 'react';
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import pic6 from "../img/pic6.jpg";

const AsideRightProfile = (props) => (
    <div>
    <div className="asideright-top__profile">
    <div className="asideright-top__profile--info">
        <div className="asideright-top__profile--info__container">
            <img 
                src={pic2}
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
                src={pic3}
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
                src={pic6}
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