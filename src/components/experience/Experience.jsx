import React from "react";
import "./Experience.css";
import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiReact } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <IoLogoHtml5 className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-ligth">Experiencia</small>
              </div>
            </article>
            <article className="experience__detail">
              <SiCss3 className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-ligth">Intermedio</small>
              </div>
            </article>
            <article className="experience__detail">
              <IoLogoJavascript className="experience__detail-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-ligth">Intermedio</small>
              </div>
            </article>
            <article className="experience__detail">
              <SiReact className="experience__detail-icon" />
              <div>
                <h4>React</h4>
                <small className="text-ligth">Intermedio</small>
              </div>
            </article>
            <article className="experience__detail">
              <FaBootstrap className="experience__detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-ligth">Intermedio</small>
              </div>
            </article>
          </div>
        </div>

        {/* END FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <FaNodeJs className="experience__detail-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-ligth">In progress</small>
              </div>
            </article>
            <article className="experience__detail">
              <DiMongodb className="experience__detail-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-ligth">In progress</small>
              </div>
            </article>
            <article className="experience__detail">
              <SiPhp className="experience__detail-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-ligth">Basic</small>
              </div>
            </article>
            <article className="experience__detail">
              <SiPostgresql className="experience__detail-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-ligth">In progress</small>
              </div>
            </article>
            <article className="experience__detail">
              <SiMysql className="experience__detail-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-ligth">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
