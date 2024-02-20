import React from "react";

function SVG_Contact(polyline){

    return(
        <React.Fragment key={polyline.id}>
            <polyline className="polylineDisapear" strokeDashoffset={`${polyline.offset}%`} points={polyline.points.A}/>
            <polyline strokeDasharray={`${polyline.dashArray}px`} strokeDashoffset={`${polyline.offset}px`} points={polyline.points.B}/>
        </React.Fragment>
    )
}

export default SVG_Contact;