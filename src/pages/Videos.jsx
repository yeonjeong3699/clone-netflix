import React from "react";
import { useParams } from "react-router-dom";

export default function Videos(){
    const {keyword} = useParams(); //파라미터(값) 가져오기

    return(
        <div>
            videos {keyword}
        </div>
    )
}