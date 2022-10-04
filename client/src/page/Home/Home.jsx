import React from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fotomision from "../../assets/fotomision.jpg";
import fotopost from "../../assets/AccionFemenina.png";
import CarouselImg from '../../component/Carousel/CarouselImg';
import { Link } from 'react-router-dom';
import { GiPostOffice, GiShare } from 'react-icons/gi';
import { HiCursorClick } from 'react-icons/hi';
import { TbMessages, TbJewishStar } from 'react-icons/tb';
import { SiSubstack } from 'react-icons/si';
import { IconContext } from 'react-icons';

export default function Home(){
    return (
        <section className='home-container'>
            <CarouselImg/>

            <IconContext.Provider value={{ size: '1.5em', style: { color: '#A02C7D' } }}>
                <section className='home-mision-section'>
                    <section className='home-mision-paragraph'>
                        <h1>MISIÓN <TbJewishStar/></h1>

                        <p><SiSubstack/> Queremos ayudar a mujeres extranjeras y de otras partes del territorio Español que llegan a Barcelona por primera vez, así como las que ya residen en la ciudad. Buscamos que se sientan acogidas y puedan acceder con mayor facilidad a la información de entidades que cuentan con los recursos necesarios para su integración y desarrollo. Con el fin de lograr este objetivo, hemos creado esta página web que sirve como una brújula para que ellas puedan orientarse en su camino, saber sus condiciones dentro de la comunidad y puedan obtener su autonomía o independencia en base del boca a boca y las redes sociales.</p>
                    </section>
                    
                    <img src ={fotomision} className="home-mision-img" alt= "misionImg"/>
                </section>
                

                <section className="home-post-section">
                    <img src ={fotopost} className="home-post-img" alt= "misionImg"/>

                    <section className='home-post-text'>
                            <h1>PUBLICACIONES <TbMessages/></h1>

                            <section className='home-post-text-intro'>
                                <ul>
                                    <li>Para <b>encontrar información</b> <GiPostOffice/> que necesites acerca de servicios, ayudas, salud, educación, homologación, entretenimiento, entre otros.</li>
                                    <li>Para <b>aportar algún contenido relacionado</b> <GiShare /> que pueda ayudar a crecer la comunidad.</li>
                                </ul>
                                
                                <p>Clica <Link to='/publicaciones'  className='home-links'><b>Aquí</b> <HiCursorClick/></Link>.</p>
                            </section>
                    </section>              
                </section>
            </IconContext.Provider>
        </section>
    )
}
