import React from "react";

import { Fade } from "react-awesome-reveal";

 const Footer=()=>{
    return(
        <footer className="bck_red">
            <Fade triggerOnce delay={500}>
                <div className="font_righteous footer_logo_venue">Glendale</div>
                <div className="footer_copyright">
                    The Eras Tour 2023 All Rights Reserved
                </div>
            </Fade>
        </footer>
    )
 }

 export default Footer;