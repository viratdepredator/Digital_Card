import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee,faGithub } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faLinkedin,faFacebook,faInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons';
import Interest from './Interests'
import './style.css'
export default function Footer(){
    return (<div className='head'>
        <Interest/>
        <div className='ftr'>
        <a target='_blank' href="https://github.com/viratdepredator"><FontAwesomeIcon icon={faGithub} /></a>
        <a target='_blank' href='https://www.linkedin.com/in/virat-kumar-94a693215/'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a target='_blank' href='#'><FontAwesomeIcon icon={faFacebook} /></a>
        <a target='_blank' href='https://www.instagram.com/virat.cpp/'><FontAwesomeIcon icon={faInstagram} /></a>
        <a target='_blank' href='https://twitter.com/Viratku0804'><FontAwesomeIcon icon={faTwitter} /></a>
        {/* <a><FontAwesomeIcon icon={faEnvelope} /></a>
        <a><FontAwesomeIcon icon={faEnvelope} /></a> */}
        </div>

    </div>)

}