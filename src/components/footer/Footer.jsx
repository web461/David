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
                <a href="#qualification" className="footer_link">Projects</a>
            </li>
            {/* <li>
                <a href="#testimonials" className="footer_link">Testimonials</a>
            </li> */}
        </ul>

        <div className="footer_social">
        <a href="https://linkedin.com/in/nobrega-davi" className="footer_social-link" target= '_blank' >
        <i class="uil uil-linkedin"></i>
         </a>
{/*          <a href="https://wa.me/+1(587)429-5885"className="footer_social-link" target= '_blank' >
         <i class="uil uil-whatsapp"></i>

</a> */}

<a href="https://instagram.com/david_hume01?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" className="footer_social-link" target= '_blank' >
<i class="uil uil-instagram"></i>

</a> 
        </div>
        <span className='footer_copy'>David Hume </span>
    </div>
   </footer>
  )
}

export default Footer
