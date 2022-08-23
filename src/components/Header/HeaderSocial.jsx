import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/julio-cesar-gayosso-herrera-644529244/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/JulioGayosso/" target="_blank"><FaGithub/></a>
           
        </div>
    );
};

export default HeaderSocial;