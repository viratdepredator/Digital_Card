import React from 'react';
import About from "../Images/about.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './style.css';
import link from '../Images/linkedin.png';
export default function Info(){
return (
    <div >
    <img src={About} className='image'/>
    <div className='name'>
    <h1>Virat Kumar</h1>
    <h3>FullStack Developer</h3>
    <h5>viratku.co</h5>
    </div>
    {/* <button type='submit'><i class="fa-solid fa-envelope" style={{"color: #1f3951;"}}></i>Email</button> */}
    
    <a target='_blank' href='#' className='wt'>
    <FontAwesomeIcon icon={faEnvelope} /><span>Email</span></a>
    <a target='_blank' href='https://www.linkedin.com/in/virat-kumar-94a693215/' className='bl'><img src={link}/> LinkedIn</a>
    </div>
)

}