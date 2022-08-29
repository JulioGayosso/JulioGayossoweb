import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
    {
      id: 1,
      Image: IMG1,
      title: "Appi Wheater",
      github: "https://github.com",
      demo: "https://fabulous-taffy-36b453.netlify.app/",
    },

    {
      id: 2,
      Image: IMG2,
      title: "Pokedex",
      github: "https://github.com",
      demo: "https://imaginative-hotteok-c7783b.netlify.app/",
    },

    {
      id: 3,
      Image: IMG3,
      title: "Appi Wheater",
      github: "https://github.com",
      demo: "https://fabulous-taffy-36b453.netlify.app/",
    },

    {
      id: 4,
      Image: IMG4,
      title: "Appi Wheater",
      github: "https://github.com",
      demo: "https://fabulous-taffy-36b453.netlify.app/",
    },

    {
      id: 5,
      Image: IMG5,
      title: "Appi Wheater",
      github: "https://github.com",
      demo: "https://fabulous-taffy-36b453.netlify.app/",
    },

    {
      id: 6,
      Image: IMG6,
      title: "Appi Wheater",
      github: "https://github.com",
      demo: "https://fabulous-taffy-36b453.netlify.app/",
    }
  ]


const Portfolio = () => {
    return (
        <section id='portfolio'>
           <h5>My Recent Work</h5>
           <h2>Portfolio</h2>

            <div className='container portfolio__container'>

                {
                  data.map(({id,Image,title,github,demo})=>{
                    return(
                        <article key={id} className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={Image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                       <div className='portfolio__item-cta'>
                       <a href={github} className='btn'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank'>Weather App</a>
                       </div>
                    </article>

                    )
                  })


                }
                
            </div>
        </section>

        
    );
};




export default Portfolio;
{/*   <article className='portfolio__item'>
      <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
      </div>
      <h3>This is a portfolio item title </h3>
     <div className='portfolio__item-cta'>
     <a href="https://github.com" className='btn'>Github</a>
      <a href="https://fabulous-taffy-36b453.netlify.app/" className='btn btn-primary' target='_blank'>Weather App</a>
     </div>
  </article>
  <article className='portfolio__item'>
      <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
      </div>
      <h3>This is a portfolio item title </h3>
     <div className='portfolio__item-cta'>
     <a href="https://github.com" className='btn'>Github</a>
      <a href="https://fabulous-taffy-36b453.netlify.app/" className='btn btn-primary' target='_blank'>Weather App</a>
     </div>
  </article>
  <article className='portfolio__item'>
      <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
      </div>
      <h3>This is a portfolio item title </h3>
     <div className='portfolio__item-cta'>
     <a href="https://github.com" className='btn'>Github</a>
      <a href="https://fabulous-taffy-36b453.netlify.app/" className='btn btn-primary' target='_blank'>Weather App</a>
     </div>
  </article>
  <article className='portfolio__item'>
      <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
      </div>
      <h3>This is a portfolio item title </h3>
     <div className='portfolio__item-cta'>
     <a href="https://github.com" className='btn'>Github</a>
      <a href="https://fabulous-taffy-36b453.netlify.app/" className='btn btn-primary' target='_blank'>Weather App</a>
     </div>
  </article>
  <article className='portfolio__item'>
      <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
      </div>
      <h3>This is a portfolio item title </h3>
     <div className='portfolio__item-cta'>
     <a href="https://github.com" className='btn'>Github</a>
      <a href="https://fabulous-taffy-36b453.netlify.app/" className='btn btn-primary' target='_blank'>Weather App</a>
     </div>
  </article> */}