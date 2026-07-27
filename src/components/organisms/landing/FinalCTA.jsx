import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'

export default function FinalCTA() {
  return (
    <section className="download">
      <div className="download__card">
        <Logo alt="" className="download__logo" aria-hidden="true" />
        <h2>Empieza a gestionar precios de forma inteligente</h2>
        <p>
          Únete a cientos de comercios que ya simplificaron sus consultas de
          precio. Prueba gratis hoy — sin tarjeta de crédito.
        </p>
        <div className="download__actions">
          <Link to="/registro" className="btn btn--primary">
            Crear cuenta comercio
          </Link>
          <a href="#pricing" className="btn btn--outline">
            Comparar planes
          </a>
        </div>
      </div>
    </section>
  )
}
