import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import collage2 from "../../assets/Collage2.jpg"
import collage1 from "../../assets/Collage1.jpg"

export default function Home(){
        return (
            <>
            <Carousel>
                <section>
                    <img src={collage2} alt=''/>
                </section>
                <section>
                    <img src={collage1} alt=''/>
                </section>
        
            </Carousel>
            </>
        );
}
