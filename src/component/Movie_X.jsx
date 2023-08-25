import React from "react";

export default function Movie(props){
    return(
        <>
            <div className="movieItem">
                <img src={`https://image.tmdb.org/t/p/original/${props.props.backdrop_path}`}/>
            </div>
        </>
    )
}