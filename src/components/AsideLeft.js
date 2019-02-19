import React, {Component} from 'react';
import AsideLeftSession from './AsideLeftSession';
import AsideLeftQuestions from './AsideLeftQuestions';
import AsideLeftInsights from './AsideLeftInsights';

export default class AsideLeft extends Component {
    render() {
        const title = "Questions",
            contentOne = "Does MTN's new mobile mobile pose a threat to Paga?",
            contentTwo = "Did Mr Biggs make a mistake by freelancing their business?",
            insight = "insights",
            insightOne = "Cyrus Majebi",
            insightTwo = "Tobi Igbinedion",
            session = "sessions",
            sessionOne = "Yomi Adedeji",
            sessionTwo = "Don Jazzy";
        return (
            <div className="asideleft">
                <div className="asideleft__header">For You</div>
                <AsideLeftSession
                    session={session}
                    sessionOne={sessionOne}
                    sessionTwo={sessionTwo}
                />
                <AsideLeftInsights
                    insight={insight}
                    insightOne={insightOne}
                    insightTwo={insightTwo}
                />
                <AsideLeftQuestions
                        title={title}
                        contentOne={contentOne}
                        contentTwo={contentTwo}
                />
            </div>
        )
    }
} 