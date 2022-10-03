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

                    <p>Es ayudar a mujeres extranjeras y de otras partes del territorio Español que llegan a Barcelona por primera vez y las que ya residen. Buscamos que se sientan acogidas y puedan acceder con mayor facilidad a la información de entidades que cuentan con los recursos necesarios para su desarrollo en Barcelona.
Teniendo la web como una brújula para que ellas puedan orientarse en su camino, saber sus condiciones como usuarias y puedan obtener autonomía o independencia en base del boca a boca y redes sociales.
</p>
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
                                <li>Para <b>aportar algún contenido relacionado</b> que pueda ayudar a crecer la comunidad</li>
                            </ul>
                            
                            <p>Clica <Link to='/publicaciones'  className='home-links'>Aquí</Link>.</p>
                        </section>
                </section>              
            </section>
        </section>
    )
}
