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
                    ¡Hola! Soy Jorge Altamirano, un desarrollador frontend apasionado por la creación de experiencias web intuitivas y atractivas. Comencé mi viaje en la tecnología estudiando una tecnicatura en programación en la UTN (Universidad Tecnológica Nacional), donde adquirí una base sólida en el desarrollo de software. <br /><br />

                    Mis habilidades técnicas incluyen HTML, CSS , JavaScript y React, que he aplicado en varios proyectos personales. Cada uno de estos proyectos me ha permitido perfeccionar mis habilidades y aprender nuevas técnicas, lo que me motiva a seguir mejorando.<br /><br />

                    Además de la programación, soy un apasionado del ajedrez y la música, lo que me ayuda a mantener un equilibrio entre la lógica y la creatividad, tanto en mi vida personal como profesional.<br /><br />

                    Mi objetivo a corto plazo es conseguir un empleo en relación de dependencia, donde pueda contribuir y seguir aprendiendo. <br /><br />
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
                        <p>GIT</p>
                    </div>
                </div>

            </div>
        </>


    )
}
