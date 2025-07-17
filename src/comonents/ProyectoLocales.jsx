import '../styles/ProyectoLocales.css'

export const ProyectoLocales = () => {
    return (
        <section className="proyecto-fullstack">
            <h2>Proyecto Fullstack Destacado: Plataforma de Locales</h2>

            <div className="proyecto-contenido">
               

                <div className="proyecto-info">
                    <p>
                        Esta aplicación permite a los clientes visualizar el menú digital de diferentes locales y hacer pedidos por WhatsApp. Cada local cuenta con su propio panel de administración para cargar comidas, variantes, imágenes y precios.
                    </p>

                    <p className='tecnologias'><strong>Tecnologías utilizadas:</strong> HTML, CSS, React, Node.js, Express, MySQL</p>

                    <div className="proyecto-enlaces">
                        <a href="https://client-morfys.vercel.app/" target="_blank">
                         <img src="/JorgealoPortfolio/imagenes/imagen-fullstack.png" alt="imagen de pagina de locales" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
