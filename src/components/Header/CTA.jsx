import React from 'react';
import CV from '../../assets/cv.pdf'


const CTA = () => {
    return (
        <div className='cta'>
          <a href={CV}Download  className='btn' target="_blank">Descarga CV</a> 
          <a href='#contact' className='btn btn-primary'>Hablemos</a> 
        </div>
    );
};

export default CTA;