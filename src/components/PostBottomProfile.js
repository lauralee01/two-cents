import React from 'react';
import face6 from '../img/face6.jpeg';

const PostBottomProfile = (props) => (
    <div className="content__bottom">
            <div className="content__bottom--heading">
                <div className="content__bottom--heading__info">
                    <img src={face6} alt="Logo" className="content__bottom--heading__image" />
                    <div className="content__bottom--heading__handle">
                        <h1>
                            Yele Bademosi <span>E</span>&nbsp; <small>Jan 2, 8:31 PM</small>{" "}
                        </h1>
                        <p>{props.bottomPost}</p>
                    </div>
                </div>
                <div className="content__bottom--heading__icon">
                    <i className="fas fa-ellipsis-h" />
                </div>
            </div>

            <div className="content__bottom--data">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero
                repellendus velit labore voluptatum perferendis similique minima,
                corporis exercitationem sequi corrupti soluta harum aspernatur,
                distinctio debitis possimus accusamus id eius tempore, beatae
                asperiores illo. Quisquam, non harum. Porro, eum eaque!...
                <span className="read-more">Read More</span>  
                </p>
            </div>

            <div className="content__bottom--data-footer">
                <span>
                    <i className="fas fa-thumbs-up" /> 103
                </span>
                <span>
                    <i className="fas fa-eye" /> 366
                </span>
                <span>
                    <i className="fas fa-comment-alt" /> 11
                </span>
            </div>
        </div>
)

export default PostBottomProfile;