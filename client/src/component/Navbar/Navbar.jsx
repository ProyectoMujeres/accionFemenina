import React from "react";
import "./Navbar.css";
import Logowomen from "../../assets/Logowomen.jpg";

export default function Navbar() {
  return (
    <nav className="navigation">
      <a href ="/"> <img src={Logowomen}  alt= "logowomen" className="logo"/>
        {/*casa de la mujer*/}
      </a>
      <h1>Acción Femenina</h1>

      <div className="navigation-menu">
        <ul className="menu-container ">
          {" "}
          <li className="menu" id="menu">
            {" "}
            <button className="menu-profile">Avatar
            </button>
            <section className="navlink">
              {""}

              <p>
                <a href="/mi_perfil">Mi perfil</a>
              </p>

              <p>
                <a href="/mis_comentarios">Mis comentarios </a>
              </p>

              <p>
                <a href="/cerrar_sesión">Cerrar sesion</a>
              </p>
            </section>
          </li>
        </ul>
      </div>
    </nav>
  );
}
