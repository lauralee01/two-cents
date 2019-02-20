import React from 'react';
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";

const AsideLeftSession = (props) => (
    <div>
        <div className="asideleft__sessions">
        <h1 className="asideleft__sessions--heading">{props.session}</h1>
        <div className="asideleft__sessions--icon">
            <i className="fas fa-redo-alt" />
                &nbsp; refresh
        </div>
    </div>

    <div className="asideleft__users">
        <div className="asideleft__users--details">
            <img
                src={pic2} 
                alt="Pic 2"
                className="asideleft__users--image"
            />
            <div className="asideleft__users--info">
                <h3>{props.sessionOne}</h3> 
                <p>
                    Managing partner <span>@Softcom</span>
                </p>
            </div>
        </div>
    <div className="asideleft__users--cancel">
        <i className="fas fa-times" />
    </div> 
    </div>

    <div className="asideleft__users">
    <div className="asideleft__users--details">
        <img
            src={pic3}
            alt="Pic 3"
            className="asideleft__users--image"
        />
        <div className="asideleft__users--info">
            <h3>{props.sessionTwo}</h3>
            <p>
                Music Producer, Artiste, CEO <span>@Marvin</span> Records
            </p>
        </div>
    </div>
    <div className="asideleft__users--cancel">
    <i className="fas fa-times" />
    </div> 
    </div>
    </div>
)

export default AsideLeftSession;