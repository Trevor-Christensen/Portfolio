import React from 'react';
import '../styles/footer.scss';

function Footer() {
  return (
    <footer className="main-footer">
        <h2 className='footer__title'>Let's Connect!</h2>
      <nav>
        <div className='footer__nav'>
        <a className= 'footer__link' href="https://github.com/Trevor-Christensen">GitHub</a>
        <a className= 'footer__link'href="#Email">Trevor.j.christensen1997@gmail.com</a>
        <a className= 'footer__link'href="#Phone Number">(804)-921-3677</a>
        <a className= 'footer__link'href="https://www.linkedin.com/in/trevor-christensen1/">LinkedIn</a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;




