import React from 'react'
const Navbar = ({ isScrolling }) => {
  return (
    <nav className="navbar" >

      <div className="navbar-logo" >

        <h1>CEMERI</h1>

        <div className="navbar-contact">
          <a className="articulos" style={{ textDecoration: 'none' }} href="https://cemeri.org/regiones-y-temas/">Articulos</a>
          <a className="contenido" style={{ textDecoration: 'none' }} href="https://cemeri.org/enciclopedia/">Contenido</a>
          <a className="contactos" style={{ textDecoration: 'none' }} href="https://www.facebook.com/CEMERImx/">Contacto</a>
        </div>
        <div className="navbar-login">
          <a className="registrarse" style={{ textDecoration: 'none' }} href="https://cemeri.org/wp-login.php">Registrate</a>
        </div>
      </div>

    </nav>

  )
}

export default Navbar