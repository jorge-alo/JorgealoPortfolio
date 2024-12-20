import { useRef, useState } from 'react'
import { ArrowLeft } from '../iconos/ArrowLeft'
import { ArrowRight } from '../iconos/ArrowRight'
import '../styles/Portfolio.css'
import { useEffect } from 'react'

export const Portfolio = () => {
    const [carruselWidth, setCarruselWidth] = useState(0)
    const [carruselesWidth, setCarruselesWidth] = useState(0)
    const [portfolioImagen, setPortfolioImagen] = useState(0)
    const [list, setList] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [translateX, setTranslateX] = useState(0)

    const refCarrusel = useRef(null)
    const refCarruseles = useRef(null)

    const calcularDimenciones = () => {
        if (refCarrusel.current && refCarruseles.current) {
            setCarruselWidth(refCarrusel.current.offsetWidth)
            setCarruselesWidth(refCarruseles.current.offsetWidth)
            setPortfolioImagen(refCarruseles.current.children[0].offsetWidth + 10)
            setList(refCarruseles.current.children.length)

        }
    }


    useEffect(() => {
        calcularDimenciones()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            calcularDimenciones()
            // Calcular nueva posición máxima

        }
        window.addEventListener("resize", handleResize)
        mover(currentIndex)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [carruselesWidth, carruselWidth, portfolioImagen, currentIndex])





    const mover = () => {
        const maxPosition = -(carruselesWidth - carruselWidth);
        const newPosition = -(portfolioImagen * currentIndex)
        console.log(carruselWidth)
        console.log(carruselesWidth)
        console.log(maxPosition)
        console.log(newPosition)
        console.log(currentIndex)
        if (newPosition < maxPosition) {
            setTranslateX(maxPosition)

        }
        else {
            setTranslateX(newPosition)
        }
    }

    const handleLeft = () => {

        if (currentIndex > 0) {
            const newIndex = currentIndex - 1

            setCurrentIndex(newIndex)
            console.log(newIndex)
            mover()
        }
    }

    const handleRight = () => {
        const maxPosition = -(carruselesWidth - carruselWidth);
        const newPosition = -(portfolioImagen * currentIndex)


        if (newPosition > maxPosition) {
            const newIndex = currentIndex + 1
            setCurrentIndex(newIndex);

            mover()
        } else {
            mover()
        }

    }




    return (
        <div className='portfolio-container'>
            <h2>Portfolio</h2>
            <div className="portfolio-carrusel" ref={refCarrusel}>
                <button className='left' onClick={handleLeft}> <ArrowLeft /></button>
                <div
                    className="portfolio__carruseles"
                    ref={refCarruseles}
                    style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.8s ' }}
                >
                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://web-compras-carrito.netlify.app/">
                            <img src="/JorgealoPortfolio/imagenes/compras-carrito.png" alt="web de compras" />
                            <h3>Web de compras</h3>
                            <p>HTML CSS React</p>
                        </a>

                    </div>

                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://generador-de-tweet.netlify.app/">
                            <img src="/JorgealoPortfolio/imagenes/generador de tweet.png" alt="generador de tweet" />
                            <h3>Generador de tweet</h3>
                            <p>HTML CSS React</p>
                        </a>

                    </div>

                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://cotizador-prestamos-intereses.netlify.app">
                            <img src="/JorgealoPortfolio/imagenes/cotizador.png" alt="cotizador" />
                            <h3>Cotizador</h3>
                            <p>HTML CSS React</p>
                        </a>
                    </div>
                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://app-suscripciones.netlify.app">
                            <img src="/JorgealoPortfolio/imagenes/suscripciones.png" alt="suscripciones" />
                            <h3>Suscripciones</h3>
                            <p>HTML CSS React</p>
                        </a>
                    </div>
                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://game-tateti.netlify.app">
                            <img src="/JorgealoPortfolio/imagenes/tateti.png" alt="tateti" />
                            <h3>Tateti</h3>
                            <p>HTML CSS React</p>
                        </a>
                    </div>
                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://apliccion-clima.netlify.app">
                            <img src="/JorgealoPortfolio/imagenes/aplicacion de clima.png" alt="aplicacion de clima" />
                            <h3>Aplicacion de clima</h3>
                            <p>HTML CSS React</p>
                        </a>
                    </div>
                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://buscador-filtrar-marcar.netlify.app">
                            <img src="/JorgealoPortfolio/imagenes/buscador-filtrar-marcar.png" alt="buscador-filtrar-marcar" />
                            <h3>Buscador-filtrar-marcar</h3>
                            <p>HTML CSS React</p>
                        </a>
                    </div>
                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://app-buscador-gifs.netlify.app">
                            <img src="/JorgealoPortfolio/imagenes/buscador de gifs.png" alt="buscador de gifs" />
                            <h3>buscador de gifs</h3>
                            <p>HTML CSS React</p>
                        </a>
                    </div>
                    <div className="portfolio__container-img">
                        <a className='portfolio__link' target='_blank' rel="noopener noreferrer" href="https://busca-peliculas-ya.netlify.app">
                            <img src="/JorgealoPortfolio/imagenes/buscador de peliculas.png" alt="buscador de peliculas" />
                            <h3>buscador de peliculas</h3>
                            <p>HTML CSS React</p>
                        </a>
                    </div>

                </div>
                <button className='right' onClick={handleRight}>
                    <ArrowRight />
                </button>

            </div>
        </div>

    )
}
