import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import collage1 from '../../assets/Collage1.jpg'
import collage2 from '../../assets/Collage2.jpg'
import './CarouselImg.css';

export default function CarouselImg(){
    return(
        <section>
            <Carousel autoPlay axis='horizontal' interval='3000' infiniteLoop thumbWidth='9rem' className='carousel-slide'>
                <section>
                    <img src={collage1} alt=''/>
                </section>

                <section>
                    <img src={collage2} alt=''/>
                </section>
            </Carousel>
        </section>
    )
}