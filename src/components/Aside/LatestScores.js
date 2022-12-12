import React from "react";

export default function LatestScores() {
    return (
        <div className="AsideLatestScores">
            {/* Upcoming Games and Latest Match Results */}
            
            <div className="media-headers">
                <h3>Live Results - National</h3>
            </div>
            <div className="scoreaxis-widget-efbfc" data-reactroot="">
                <iframe title="iframe" src="https://www.scoreaxis.com/widget/live-match/18535132?autoHeight=1&amp;links=0&amp;lineupsTab=0&amp;eventsTab=0&amp;statsTab=0&amp;inst=efbfc" style={{width: "100%",border: "none",transition: "all 300ms ease"}}></iframe>
                <script>window.addEventListener("DOMContentLoaded",function event(){window.addEventListener("message",event=>{if(event.data.appHeight&&"efbfc"===event.data.inst){let container=document.querySelector("#scoreaxis-widget-efbfc iframe");container&&(container.style.height=parseInt(event.data.appHeight)+"px")}},!1)});</script>
            </div>
        </div>
    );
}