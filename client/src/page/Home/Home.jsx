import React from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fotomision from "../../assets/fotomision.jpg";
import fotopost from "../../assets/AccionFemenina.png";
import CarouselImg from '../../component/Carousel/CarouselImg';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <section className='home-container'>
            <CarouselImg/>

            <section className='home-mision-section'>
                <section className='home-mision-paragraph'>
                    <h1>MISIÓN</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
                
                <img src ={fotomision} className="home-mision-img" alt= "misionImg"/>
            </section>
            

            <section className="home-post-section">
                <img src ={fotopost} className="home-post-img" alt= "misionImg"/>

                <section className='home-post-text'>
                        <h1>PUBLICACIONES</h1>

                        <section className='home-post-text-intro'>
                            <ul>
                                <li>Para <b>encontrar información</b> que necesites acerca de servicios, ayudas, salud, educación, homologación, entretenimiento, entre otros.</li>
                                <li>Para <b>aportar algún contenido relacionado</b> que pueda ayudar a crecer la comunidad.</li>
                            </ul>
                            
                            <p>Clica <Link to='/publicaciones'  className='home-links'>Aquí</Link>.</p>
                        </section>
                </section>              
            </section>
        </section>
    )
}
