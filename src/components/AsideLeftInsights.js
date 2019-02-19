import React from 'react';
import face4 from "../img/face4.jpeg";
import face5 from "../img/face5.jpeg";

const AsideLeftInsights = (props) => (
    <div>
            <div className="asideleft__users-insight">
            <h1 className="asideleft__users-insight--sessions">{props.insight}</h1>
            <div className="asideleft__users-insight--icon">
                <i className="fas fa-redo-alt" />
                &nbsp; refresh
            </div>
        </div>
        <div className="asideleft__users-profile">
            <div className="asideleft__users-profile--container">
                <div className="asideleft__users-profile--content">
                    <div className="asideleft__users-profile--data">
                        <img
                            src={face4}
                            alt="Pic 4"
                            className="asideleft__users-profile--image"
                        />
                    <div className="asideleft__users-profile--handle">
                        <h3>{props.insightOne}</h3>
                        <p>
                            Co-founder <span>@TwoCents</span>
                        </p>
                    </div> 
                    </div>
                    <div className="asideleft__users-profile--cancel">
                        <i className="fas fa-times" />
                    </div> 
                </div>
                <p className="asideleft__users-profile--post">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
                </p>
            </div>
        </div>


        <div className="asideleft__users-profile">
            <div className="asideleft__users-profile--container">
                <div className="asideleft__users-profile--content">
                    <div className="asideleft__users-profile--data">
                        <img
                            src={face5}
                            alt="Pic 5"
                            className="asideleft__users-profile--image"
                        />
                    <div className="asideleft__users-profile--handle">
                        <h3>{props.insightTwo}</h3>
                        <p>
                            Co-founder <span>@TwoCents</span>
                        </p>
                    </div> 
                    </div>
                    <div className="asideleft__users-profile--cancel">
                        <i className="fas fa-times" />
                    </div> 
                </div>
                <p className="asideleft__users-profile--post">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
                </p>
            </div>
        </div>
    </div>
    
)
export default AsideLeftInsights;