import '../styles/Nav.css'

export const Nav = () => {
  return (
    <div className="nav-bar">
      <a href="#presentacion">
      <div className='nav__container-img'> 
            <img className='nav__container-img__img' src="/imagenes/icono-frontend.jpg" alt="logo" />
        </div>
      </a>
        
        <div className='nav__link'>
            <a href="#about">About me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#form">Contact</a>
        </div>

    </div>
  )
}
