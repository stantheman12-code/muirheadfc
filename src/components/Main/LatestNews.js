import React from "react";

{/* Latest News child component - this a functional component with code that makes up the content of the Latest News section of webapp */}

export default function LatestNews() {
    return(
        <div className="MainLatestNewsSection">
            
            <section className="media-headers">
                <h3 id="latest-news">Latest News</h3>
            </section>
    
            <section className="content-layout">
                <div className="card">
                    <h5>Mens</h5>
                    <img src="./assets/news-photo1-400x300.jpg" alt="" className="card-image" />
                    <div className="card-content">
                        <a href="./">Muirhead's cruise to victory</a>
                    </div>
                </div>

                <div className="card">
                     <h5>Womens</h5>
                    <img src="./assets/news-photo2-400x300.jpg" alt="" className="card-image" />
                        <div className="card-content">
                            <a href="./">Federal Government contributes $2.7 million to women’s football programs</a>
                        </div>
                 </div>
                 
                <div className="card">
                    <h5>Nationals</h5>
                    <img src="./assets/news-photo4-400x300.jpg" alt="" className="card-image" />
                        <div className="card-content">
                            <a href="./">Muirhead's great start to the season</a>
                        </div>
                </div>
            </section>
        </div>
    );
}