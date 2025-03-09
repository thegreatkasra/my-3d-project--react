import React from 'react'
import './Contact.css'
import Button from '../Button/Button'
import Form from '../Form/Form'

const Contact = () => {
   
  const handleClickTelegram = () => {
    window.location.href = 'https://t.me/+989129217536';
  };
  const handleClickInstagram = () => {
    window.location.href = 'https://www.instagram.com/kasra.torabimansour/';
  };
  const handleClickEmail = () => {
    window.location.href = 'mailto:kasra.torabiii@outlook.com';
  };

  return (
    <section id="contact" style={{ height: '100vh'}}>
         
        <div className='contact' >
         <div className="contact--header">
          <p>If you are interested in collaborating with me and like my work, you can contact me through one of the methods below :</p>
         </div>

          <div className="contact--container">
            <div className="contact--form">
              <Form />
            </div>
            <div className="contact--buttons">
              <Button  onClick={handleClickTelegram} btnName='Telegram' />
              <Button  onClick={handleClickInstagram}  btnName='Instagram' />
              <Button  onClick={handleClickEmail}  btnName='Email' />
            </div>
         </div>
         <footer>
          <hr style={{ backgroundColor: '#808080', height: '1px', border: 'none' }} />
          <p>Copy right reserved - Designed by Kasra Torabi</p>
         </footer>
         </div>
    </section>
  )
}

export default Contact;
