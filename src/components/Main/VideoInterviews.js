import React from "react";

export default function VideoInterviews() {
    return (
        <div className="MainVideoInterviews">
            
            {/* Player Interview Videos section */}
    
            <div className="media-headers">
                <h3 id="video-interviews">Player Interviews</h3>
            </div>

            <section className="content-layout">
                <div className="card">
                    <iframe width="475" height="300" src="https://www.youtube.com/embed/pCJ-PkuEvxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="card">
                    <iframe width="475" height="300" src="https://www.youtube.com/embed/nsR2_H9ORUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>         
            </section>
        </div>
    );
}