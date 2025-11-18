
import React from 'react'

export default function Navbar(){
  return (
    <nav>
      <div className="container nav-inner">
        <div className="brand">Samuel Alejandro Vargas Jiménez</div>
        <div className="menu">
          <a href="#home" className="active">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
