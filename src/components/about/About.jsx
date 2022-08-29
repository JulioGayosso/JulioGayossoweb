import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Conoceme</h5>
      <h2>Acerca de mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>6 meses</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>Proximamente</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>5 Completeto de Academlo</small>
            </article>
          </div>
          <p>
          Amante de la lectura, Programación y las Nuevas Tecnologías, enfocado en adquirir y desarrollar nuevos conocimientos
           para el trabajo diario, me motiva el trabajo en equipo y aportar mi granito de arena 
           cumplir con objetivos marcados para solucionar los problemas del ámbito laboral. Orientado a resultado, con comunicación y escucha activa y flexibilidad para adaptarme a las situaciones del día a día.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
