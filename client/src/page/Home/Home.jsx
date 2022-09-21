import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import collage2 from "../../assets/Collage2.jpg"
import collage1 from "../../assets/Collage1.jpg"
import fotomision from "../../assets/fotomision.jpg";

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

            <section className='mision-section'>
                <h1 className='mision-parrafo'>
                    MISIÓN:
                   <p>Ayudar a las mujeres extranjeras que puedan acceder con mayor facilidad a la información de entidades que cuentan  con los recursos necesarios para su desarrollo en Barcelona.
                    <br></br>

                    <br></br>
                    Ayuda y Acción, podemos ser voluntarias en la fundación, Acción Femenina y tener la alegría de colaborar a mujeres inmigrantes a superar el proceso de las barreras y los obstáculos que le impiden en su desarrollo personal.

                   {/*  ayuda y acción            palabras motivadoras
                   Necesitamos empoderarnos, podemos ser voluntarias en alguna associación y tener la alegria de ayudar a otras mujeres extranjeras. */}
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
);
}
