import React from "react";
import LatestNews from "./LatestNews";
import PhotoGallery from "./PhotoGallery";
import VideoHighlights from "./VideoHighlights";
import VideoInterviews from "./VideoInterviews";

{/* Main component - this is a functional component that combines all other child components of the Main section of webapp */}

export default function Main() {

    return (
        <div className="MainSection">
            <LatestNews />
            <PhotoGallery />
            <VideoHighlights />
            <VideoInterviews />
        </div>
    );
}