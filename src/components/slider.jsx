// import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./nav.css"

const slideImages = [
    { url: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-10Nov2022.jpg", },
    { url: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-09Nov2022.jpg", },
    { url: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-modularblock-8-Banner1-Kids-04Nov2022.jpg" },
    { url: "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-shoes-A-StripBanner1-27Oct2022A.jpg" },
    { url: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock1-A-02Aug2022.jpg" },
];


const Slider = () => {
    return (
        (
            <div className="slide-container">
                <Slide autoplay={true}>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                <img height={'300px'} src={`${slideImage.url}`} />
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        )
    );
}

export default Slider