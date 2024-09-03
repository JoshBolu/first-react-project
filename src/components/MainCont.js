import React from "react";

import InfoCont from "./DetailCont";
import About from "./About";
import Interests from "./interests";
import FooterCont from "./FooterCont";

function MainCont(){
    return(
        <div className="main-cont">
            <InfoCont />
            <About />
            <Interests />
            <FooterCont />
        </div>
    )
}

export default MainCont