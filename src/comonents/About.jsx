import '../styles/about.css'

export const About = () => {
    return (
        <>


            <div className="container-about">
                <h2 className='about__title'>About me</h2>
                <div className='about__container-separador'>
                    <div className='separador'>

                    </div>
                </div>
                <p className='about__parrafo'>
                    ¡Hola! Soy Jorge Altamirano, un desarrollador <strong>fullstack junior</strong> apasionado por la creación de experiencias web intuitivas y funcionales. Comencé mi camino en la tecnología estudiando una tecnicatura en programación en la UTN (Universidad Tecnológica Nacional), donde adquirí una base sólida en desarrollo de software.<br /><br />

                    Mis habilidades técnicas incluyen <strong>HTML, CSS, JavaScript, React, Node.js y Express</strong>, tecnologías que he aplicado en distintos proyectos personales. Cada proyecto me ha permitido perfeccionar mis conocimientos tanto en el frontend como en el backend, y me motiva seguir aprendiendo y creciendo profesionalmente.<br /><br />

                    Además de la programación, soy un apasionado del ajedrez y la música, lo que me ayuda a mantener un equilibrio entre la lógica y la creatividad en mi vida diaria.<br /><br />

                    Mi objetivo a corto plazo es conseguir un empleo en relación de dependencia donde pueda aportar mis conocimientos, trabajar en equipo y continuar desarrollándome como profesional.<br /><br />
                </p>

                <p className='about__tecnologias'>Tecnologias que manejo: </p>

                <div className='container-skill'>
                    <div className='skill'>
                        <span className='skill__arrow' >➤</span>
                        <p>HTML</p>
                    </div>
                    <div className='skill'>
                        <span className='skill__arrow'>➤</span>
                        <p>CSS</p>
                    </div>
                    <div className='skill'>
                        <span className='skill__arrow'>➤</span>
                        <p>JS</p>
                    </div>
                    <div className='skill'>
                        <span className='skill__arrow'>➤</span>
                        <p>REACT</p>
                    </div>
                    <div className='skill'>
                        <span className='skill__arrow'>➤</span>
                        <p>NODE.JS</p>
                    </div>
                    <div className='skill'>
                        <span className='skill__arrow'>➤</span>
                        <p>EXPRESS</p>
                    </div>
                    <div className='skill'>
                        <span className='skill__arrow'>➤</span>
                        <p>MYSQL</p>
                    </div>
                    <div className='skill'>
                        <span className='skill__arrow'>➤</span>
                        <p>GIT</p>
                    </div>
                </div>

            </div>
        </>


    )
}
