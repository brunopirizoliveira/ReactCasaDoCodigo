import React from 'react';

const Header = () => {
    return(
        <nav>
        <div class="nav-wrapper indigo darken-1">
          <a href="/" class="brand-logo">Casa do Codigo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/autores">Autores</a></li>
            <li><a href="/livros">Livros</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>        
    )
}

export default Header;