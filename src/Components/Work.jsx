import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Work = (props) => {

    const images = props.images

    return ( 
        <div className="work-container">
                <h4 className="work-title">{props.title}</h4>
                <p className="work-description">{props.description}<br/> <span>Made using {props.languages}</span></p>
                <div>
                    <Carousel dynamicHeight={true} showArrows={false} width={"80%"}>
                        {images.map(img =>(
                            <div>
                                <img src={img} alt="" />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <a href={props.repo} rel="noreferrer" target="_blank"><button>View page</button></a>
            </div>
     );
}
 
export default Work;