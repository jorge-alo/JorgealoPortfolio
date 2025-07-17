import { Github } from '../iconos/Github'
import { Inn } from '../iconos/Inn'
import '../styles/Presentacion.css'

export const Presentacion = () => {
    return (
        <>
             <div className='presentacion__container-img'>
                <img className='presentacion__img' src="/JorgealoPortfolio/imagenes/jorge.jpg" alt="perfil" />
            </div>
            <h1>Hola, yo soy Jorge Altamirano</h1>
            <div className="container-text">
                <p className="text">Desarrollador Fullstack Junior</p>
            </div>
            <div className='presentacion-links'>
                <a href="https://github.com/jorge-alo" target='_blank'><Github/></a>
                <a href="https://www.linkedin.com/in/jorge-altamirano-87717b2aa/" target='_blank'><Inn/></a>                
            </div>
        </>

    )
}
