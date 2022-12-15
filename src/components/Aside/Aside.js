import React from "react";
import About from "./About";
import LatestScores from "./LatestScores";
import LeaderBoard from "./LeaderBoard";
import UpcomingGames from "./UpcomingGames";

export default function Aside() {

{/* Importing the other function components in */}
{/* Aside section component - this a functional component that combines all the child components that make up the Aside section of the webapp */}

        return (
            <div className="AsideSection">
                <About />
                <LatestScores />
                <LeaderBoard />
                <UpcomingGames />
            </div>
        );
}