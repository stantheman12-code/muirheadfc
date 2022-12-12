import React from "react";

export default function PhotoGallery() {
    return(
        <div className="MainPhotoGallery">
            {/* Photo Gallery section */}
            <div className="media-headers">
                <h3 id="photo-gallery">Photo Gallery</h3>
            </div>

            <section className="content-layout">
                <div className="gallery">
                    <h5>Mens</h5>
                    <a href="./">
                    <img src="./assets/News-photo1-400x300.jpg" alt="" className="card-image" /></a>
                </div>
    
                <div className="gallery">
                    <h5>Womens</h5>
                    <a href="./">
                    <img src="./assets/News-photo2-400x300.jpg" alt="" className="card-image" /></a>
                </div>
                
                <div className="gallery">
                    <h5>Nationals</h5>
                    <a href="./">
                    <img src="./assets/News-photo4-400x300.jpg" alt="" className="card-image" /></a>
                </div>
            </section>
        </div>
    );
}
