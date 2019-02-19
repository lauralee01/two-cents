import React, {Component} from 'react';
import PostTopProfile from './PostTopProfile';
import PostBottomProfile from './PostBottomProfile';

export default class Posts extends Component {
    render() {
        const topPost = "New DM Feature",
                topTime = "Sept. 24, 2018, 1:16 PM",
                bottomPost = "Angel Investor @Microtaction";
        return (
            <div className="posts">
                <PostTopProfile
                    topPost={topPost}
                    topTime={topTime}
                />
                <PostBottomProfile
                    bottomPost={bottomPost}
                />
            </div>
        )
    }
} 
 