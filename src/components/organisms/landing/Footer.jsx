import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <Logo className="footer__logo" />
        <span>Easy Price</span>
      </div>
      <nav className="footer__links">
        <a href="#features">Producto</a>
        <a href="#pricing">Precios</a>
        <a href="#faq">FAQ</a>
        <Link to="/login">Iniciar sesión</Link>
      </nav>
      <p className="footer__copy">
        © {new Date().getFullYear()} Easy Price - Microtech Solutions. Todos los derechos reservados.
      </p>
    </footer>
  )
}
