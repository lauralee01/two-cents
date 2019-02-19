import React from 'react';

const AsideLeftQuestions = (props) => (
    <div className="asideleft__users-questions">
        <div className="asideleft__users-questions--top">
            <h1 className="asideleft__users-questions--heading">{props.title}</h1>
            <div className="asideleft__users-questions--icon">
                <i className="fas fa-redo-alt" />
                &nbsp; refresh
            </div>
        </div>
        <div className="asideleft__users-questions--faq">
            <p>{props.contentOne}</p>
            <div className="asideleft__users-questions--cancel">
                <i className="fas fa-times" />
            </div>
        </div>

        <div className="asideleft__users-questions--faq">
            <p>{props.contentTwo}</p>
            <div className="asideleft__users-questions--cancel">
                <i className="fas fa-times" />
            </div>
        </div>
    </div>
)

export default AsideLeftQuestions;

