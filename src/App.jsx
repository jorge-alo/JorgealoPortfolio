import './App.css'
import { About } from './comonents/About'
import { Form } from './comonents/Form'
import { Nav } from './comonents/Nav'
import { Portfolio } from './comonents/Portfolio'
import { Presentacion } from './comonents/Presentacion'
import { ProyectoLocales } from './comonents/ProyectoLocales'


export const App = () => {
  return (
    <div className='container-app'>
      <header className='header'>
        <Nav />
      </header>
      <section className='section-presentacion' id='presentacion'>
        <Presentacion/>
      </section>
      <section className='section-about' id='about'>
        <About/>
      </section>
      <section className='section-portfolio' id='portfolio'>
        <Portfolio/>
      </section>
      <section className='section-about' id='fullstack'>
        <ProyectoLocales/>
      </section>
      <section className='section-form' id='form'>
        <h2>Contacto</h2>
        <div className='section-form__container-linea'>
          <div className='section-form__linea'></div>
        </div>
        <Form/>
      </section>

    </div>

  )
}
