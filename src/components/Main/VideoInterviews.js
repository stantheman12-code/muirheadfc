import React from "react";

{/* Video Interviews child component - this a functional component with code that makes up the content of the Video Interviews section of webapp */}

export default function VideoInterviews() {
    return (
        <div className="MainVideoInterviews">
    
            <div className="media-headers">
                <h3 id="video-interviews">Player Interviews</h3>
            </div>

            <section className="content-layout-interviewvideos">
                <div className="card">
                    <h5>Mens</h5>
                    <div className="iframe-container">
                        <iframe width="475" height="300" src="https://www.youtube.com/embed/pCJ-PkuEvxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="card">
                    <h5>Womens</h5>
                    <div className="iframe-container">
                        <iframe width="475" height="300" src="https://www.youtube.com/embed/nsR2_H9ORUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>         
            </section>
        </div>
    );
}