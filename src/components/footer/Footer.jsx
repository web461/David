import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer_container container">
        <h1 className="footer_title">David Hume</h1>
        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer_link">Projects</a>
            </li>
            <li>
                <a href="#testimonials" className="footer_link">Testimonials</a>
            </li>
        </ul>

        <div className="footer_social">
        <a href="https://linkedin.com/in/nobrega-davi" className="footer_social-link" target= '_blank' >
        <i class="uil uil-linkedin"></i>
         </a>
         <a href="https://linkedin.com/in/nobrega-davi"className="footer_social-link" target= '_blank' >
         <i class="uil uil-whatsapp"></i>

</a>

<a href="https://linkedin.com/in/nobrega-davi" className="footer_social-link" target= '_blank' >
<i class="uil uil-github"></i>

</a> 
        </div>
        <span className='footer_copy'>David Hume </span>
    </div>
   </footer>
  )
}

export default Footer