import React from "react";
import Navbar from "../components/NavBar";
import Segment from "../components/SegmentPage";

const HomeLayout = () => {
    return (
        <div className="section-wrapper">
            <Navbar title="View Audience" />
            <div
                className="main"
            >
                <Segment />
            </div>
        </div>
    );
};

export default HomeLayout;
