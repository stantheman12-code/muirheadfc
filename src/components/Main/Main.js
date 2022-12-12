import React, { useState} from "react";
import LatestNews from "./LatestNews";
import PhotoGallery from "./PhotoGallery";
import VideoHighlights from "./VideoHighlights";
import VideoInterviews from "./VideoInterviews";

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