import React from "react";

{/* Video Highlights child component - this a functional component with code that makes up the content of the Video Highlights section of webapp */}

export default function VideoHighlights() {
    return (
        <div className="MainVideoHighlights">
            
            <div className="media-headers">
                <h3 id="video-highlights">Video Highlights</h3>
            </div>
        
            <section className="content-layout">
                <div className="card">
                    <h5>Mens</h5>
                    <iframe width="475" height="300" src="https://www.youtube.com/embed/ZIAWVoNG3v8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <div className="card">
                    <h5>Womens</h5>
                    <iframe width="475" height="300" src="https://www.youtube.com/embed/fgBcdTbaa9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    );
}