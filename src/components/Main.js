import React from "react";
import AsideLeft from './AsideLeft';
import Posts from './Posts';
import AsideRight from './AsideRight';

const Main = () => (
    <div className="main">
        <AsideLeft />
        <Posts />
        <AsideRight />
    </div>
)

export default Main;