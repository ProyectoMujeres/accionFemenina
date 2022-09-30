import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import collage1 from "../../assets/Collage1.jpg"
import collage2 from "../../assets/Collage2.jpg"
import fotomision from "../../assets/fotomision.jpg";

export default function Home(){
    return (
        <>
            <Carousel className='main-slide'>
                <section>
                    <img src={collage1} alt=''/>
                </section>

                <section>
                    <img src={collage2} alt=''/>
                </section>
            </Carousel>


            <section className='section-mision'>
                <h1 className='parrafo-mision'>
                    MISIÓN:
                   <p>"Nuestra misión es ayudar a empoderar mujeres extranjeras, con el objetivo de facilitar su acceso a la información de entidades, que cuentan con los recursos necesarios para su desarrollo personal / profesional en Barcelona".
                    <p></p>
                   </p>
                </h1>
                <img src ={fotomision} className="foto-mision" alt= ""/>
            </section>
            

            <section className="post-home">
                <section className="post-circle">
                </section>

                <section className="post-text">
                    <p>El texto irá aquí</p>
                </section>
            </section>
        </>
    )
}
