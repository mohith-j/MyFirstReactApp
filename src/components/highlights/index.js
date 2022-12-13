import React from "react";

import Description from "./description";
import Discount from "./discount";

const  highlights=()=>{
    return(
        <div className="highlight_wrapper">
            <Description/>
            <Discount/>
        </div>
    )
}
export default highlights;