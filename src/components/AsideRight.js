import React, {Component} from 'react';
import AsideRightFooter from './AsideRightFooter';
import AsideRightMiddle from './AsideRightMiddle';
import AsideRightProfile from './AsideRightProfile';

class AsideRight extends Component {
    render() {
        const profileOne = "Yomi Adedeji",
            profileTwo = "Don Jazzy",
            profileThree = "Chimamanda Adichie",
            titleOne = "Managing partner @Softcom",
            titleTwo = "Music Producer, Artiste, CEO @Mavin Records",
            titleThree = "Award winning writer";
        return (
            <div className="asideright">
                <div className="asideright-top">
                    <div className="asideright-top__header">
                        <h1 className="asideright-top__header--heading">who to folllow</h1>
                            <span className="asideright-top__header--refresh">
                                <i className="fas fa-redo-alt" />
                                &nbsp; refresh
                            </span>
                    </div>
                </div>
                <AsideRightProfile
                    profileOne={profileOne}
                    profileTwo={profileTwo}
                    profileThree={profileThree}
                    titleOne={titleOne}
                    titleTwo={titleTwo}
                    titleThree={titleThree}
                />
                <AsideRightMiddle />   
                <AsideRightFooter />
            </div>
        )
    }
} 
    

export default AsideRight;