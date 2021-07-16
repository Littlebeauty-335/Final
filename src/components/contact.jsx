import { useState } from 'react'
import emailjs from 'emailjs-com'



export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                House no. 14/404,Shakuntalam <br></br>                			
                L – 3, Vidya Nagar	Tamarind Terraces,<br></br>       
                Gayatri Mandir Road<br></br>            
                Bilaspur (Chattisgarh)<br></br>                                 
                Pin- 495001                    
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                8908032374
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                manish8646@yahoo.com
              </p>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.63419342533!2d85.680363861707!3d20.30115044932813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1626437011445!5m2!1sen!2sin" style={{width:"600" ,height:"450" ,style:"border:0;" ,allowfullscreen:"", loading:"lazy"}}></iframe>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
