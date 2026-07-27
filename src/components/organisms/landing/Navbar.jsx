import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        <Logo className="navbar__logo" />
        <span className="navbar__name">Easy Price</span>
      </Link>
      <nav className="navbar__links">
        <a href="#features">Producto</a>
        <a href="#how-it-works">Cómo funciona</a>
        <a href="#pricing">Precios</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="navbar__actions">
        <Link to="/login" className="btn btn--ghost btn--sm">
          Iniciar sesión
        </Link>
        <a href="#pricing" className="btn btn--primary btn--sm">
          Probar gratis
        </a>
      </div>
    </header>
  )
}
