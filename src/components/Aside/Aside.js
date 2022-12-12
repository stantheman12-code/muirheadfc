
import React from "react";
import About from "./About";
import LatestScores from "./LatestScores";
import LeaderBoard from "./LeaderBoard";
import UpcomingGames from "./UpcomingGames";

export default function Aside() {
        return (
            <div className="AsideSection">
                <About />
                <LatestScores />
                <LeaderBoard />
                <UpcomingGames />
            </div>
        );
}