import '../styles/ProyectoLocales.css'

export const ProyectoLocales = () => {
    return (
        <section className="proyecto-fullstack">
            <div className="proyecto-contenido">
                <div className="proyecto-info">
                    <h2>Sistema de Menú Digital & Gestión de Pedidos</h2>
                    
                    <p>
                        Solución Full-Stack integral diseñada para digitalizar la experiencia de venta en locales gastronómicos. 
                        El sistema permite a los clientes navegar por un catálogo interactivo y realizar pedidos directamente vía <strong>WhatsApp</strong>.
                    </p>

                    <div className="detalles-proyecto">
                        <ul>
                            <li><strong>Panel Administrativo:</strong> Gestión total de productos, categorías, precios y variantes con autenticación segura mediante <strong>JWT</strong>.</li>
                            <li><strong>Gestión Multimedia:</strong> Integración con la API de <strong>Cloudinary</strong> para el procesamiento y almacenamiento optimizado de imágenes.</li>
                            <li><strong>Performance:</strong> Manejo de estado global ligero y eficiente utilizando <strong>Zustand</strong>.</li>
                            <li><strong>Infraestructura:</strong> Arquitectura desacoplada con despliegue en <strong>Vercel</strong> y <strong>Railway</strong>.</li>
                        </ul>
                    </div>

                    <p className='tecnologias'>
                        <strong>Stack Tecnológico:</strong> React, Node.js, Express, MySQL, Zustand, JWT, Cloudinary.
                    </p>

                    <div className="proyecto-enlaces">
                        <a href="https://www.morfis.com.ar/" target="_blank" rel="noreferrer">
                             <img src="morfis.png" alt="Vista previa de Morfis - Menú Digital" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
