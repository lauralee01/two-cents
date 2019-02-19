import React from 'react';
import face2 from "../img/face2.jpeg";
import face3 from "../img/face3.jpeg";

const AsideLeftSession = (props) => (
    <div className="asideleftsession">
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
            src={face2} 
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
        src={face3}
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