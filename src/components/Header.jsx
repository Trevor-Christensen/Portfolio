import React from 'react';
import '../styles/header.scss';

function Header() {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li><a href="#biography">Biography</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;