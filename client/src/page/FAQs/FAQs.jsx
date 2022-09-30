import React from 'react';
import { Link } from 'react-router-dom';
import iconNavbar from'../../assets/iconNavbar.png';
import './FAQs.css';
import { BsArrowReturnRight } from 'react-icons/bs'
import { IconContext } from 'react-icons';

export default function FAQs(){
    return(
        <section className='faqs-container'>
            <IconContext.Provider value={{ size: '1.2rem' }}>
                <ul className='faqs-list'>
                    <li>
                        <h3>¿Dónde puedo ver <span>Información</span> de Asesoría jurídica-legal y trámites de extranjería, Servicios sociales, entre otros?</h3>

                        <p><BsArrowReturnRight/> Para poder visualizar la <b>Información</b> disponible de estas categorías tiene que ingresar al apartado de "<Link to='/publicaciones' className='faqs-links'>Publicaciones</Link>".</p>
                    </li>

                    <li>
                        <h3>¿Cómo puedo <span>Publicar</span> alguna información que quisiera compartir?</h3>

                        <p><BsArrowReturnRight/> Para poder <b>hacer Publicaciones</b> primero tendrá que <b>estar Registrada</b> en nuestra página y <b>al Iniciar sesión</b>, ingrese al área de "<Link to='/publicaciones' className='faqs-links'>Publicaciones</Link>" donde tendrá que clicar a un botón que dice "<i>Crear una nueva publicación</i>".</p>
                    </li>

                    <li>
                        <h3>¿Dónde puedo <span>Registrarme</span>?</h3>
                        
                        <p><BsArrowReturnRight/> Para poder <b>Registrarse</b> clique el icono <img src={iconNavbar} alt='mujer de perfil' className='iconW'/>, ubicado en el apartado de arriba de la página, o puede llegar al formulario clicando <Link to='/registro' className='faqs-links'>Aquí</Link>.</p>
                    </li>

                    <li>
                        <h3>¿Qué tengo que hacer para <span>Iniciar sesión</span>?</h3>
                        
                        <p><BsArrowReturnRight/> Para poder <b>Iniciar sesión</b> clique el icono <img src={iconNavbar} alt='mujer de perfil' className='iconW'/>, ubicado en el apartado de arriba de la página, y posteriormente clique el botón que dice "<i>Iniciar sesión</i>", o puede llegar al formulario clicando <Link to='/iniciar-sesion' className='faqs-links'>Aquí</Link>.</p>
                    </li>
                    
                    <li>
                        <h3>¿<span>Por qué</span> tengo que <span>Registrarme</span> para poder hacer alguna <span>Publicación</span>?</h3>
                        
                        <p><BsArrowReturnRight/> Por <b>razones de seguridad</b> se ha tomado está medida para tener un control de aquello que se Publique.</p>
                    </li>

                    <li>
                        <h3>¿Cómo puedo <span>Eliminar mi cuenta o Darme de baja</span> de la página?</h3>
                        
                        <p><BsArrowReturnRight/> Para poder <b>Eliminar su cuenta o Darse de baja</b> es necesario que nos escriba un correo a <i>info@accionfemenina.com</i>.</p>
                    </li>

                    <li>
                        <h3>¿Dónde puedo <span>Pedir ayuda para algún problema de la web</span>?</h3>
                        
                        <p><BsArrowReturnRight/> Para cualquier <b>problema relacionado con la página</b> puede escribir un correo a <i>info@accionfemenina.com</i>.</p>
                    </li>

                    <li>
                        <h3>¿Qué <span>Publicaciones puedo hacer</span>?</h3>
                        
                        <p><BsArrowReturnRight/> Las publicaciones son de <b>carácter informativo sobre algún servicio, ocio, entre otros</b>; por lo que cualquier persona interesada contactará o se dirigirá al lugar en cuestion.</p>
                    </li>

                    <li>
                        <h3>¿Qué puedo hacer si encuentro una publicación con algún tipo <span>vocabulario inadecuado o insulto</span>?</h3>
                        
                        <p><BsArrowReturnRight/> Cualquier <b>incidencia negativa</b> que encuentre en alguna publicación, escriba un correo a <i>info@accionfemenina.com</i> adjuntando una captura de pantalla y una breve descripción del caso.</p>
                    </li>
                </ul>
            </IconContext.Provider>
        </section>
    )
}