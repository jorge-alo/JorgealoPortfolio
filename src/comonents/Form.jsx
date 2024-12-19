import {  useEffect, useRef } from 'react'
import { Datos } from '../hook/Datos'
import '../styles/Form.css'

export const Form = () => {
    const nombreRef = useRef(null); // Referencia para el input "nombre"
    const formRef = useRef(null); // Referencia para la sección del formulario

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && nombreRef.current) {
                    // Enfocar el input "nombre" si el formulario es visible
                    nombreRef.current.focus();
                }
            },
            { threshold: 0.5 } // El 50% de la sección debe estar visible
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        // Limpiar el observador al desmontar
        return () => observer.disconnect();
    }, []);
    
    return (
        <form className="form" ref={formRef}>
            <Datos
                name="nombre"
                placeholder="Jhon"
                inputRef={nombreRef}
            />
            <Datos
                name="apellido"
                placeholder="Doe"
            />
            <Datos
                name="email"
                placeholder="Mail@example.com"
            />


            <div className="form__datos">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    placeholder="Tu mensaje"
                ></textarea>
            </div>
            <button>Enviar</button>
        </form>
    )
}
