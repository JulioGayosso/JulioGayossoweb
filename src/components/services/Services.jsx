import React from 'react';
import './Services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>Lo que ofrezco</h5>
            <h2>Servicios</h2>
            
            <div className="container services__container">
              <article className="service">
                <div className="service__head">
                    <h3>Analisis</h3>
                </div>
                <ul className='service__list'>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
              </article>  
           {/*    end of iu/ux    */}  
           <article className="service">
                <div className="service__head">
                    <h3>Diseño</h3>
                </div>
                <ul className='service__list'>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
              </article> 
             {/*  end web developer */}
             <article className="service">
                <div className="service__head">
                    <h3>Desarrollo</h3>
                </div>
                <ul className='service__list'>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                    <BsCheck2 className='service__list_icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
              </article> 
              {/* end content creation */}
            </div>    
        </section>
    );
};

export default Services;