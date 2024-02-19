import React from "react";

function SVG_Contact(polyline){

    return(
        <React.Fragment>
            <polyline className="polylineDisapear" strokeDashoffset={`${polyline.offset}%`} points={polyline.points.A}/>
            <polyline strokeDashoffset={`${polyline.offset}%`} points={polyline.points.B}/>
        </React.Fragment>
    )
}

export default SVG_Contact;