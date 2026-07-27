import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'
import { menuItems } from '../../../data/dashboardMenu'

export default function DashboardPanel() {
  return (
    <div className="panel">
      <div className="panel__container">
        <header className="panel__header">
          <Logo className="panel__logo" />
        </header>

        <nav className="panel__grid" aria-label="Panel de gerencia">
          {menuItems.map((item) => (
            <button key={item.id} type="button" className="panel__menu-btn">
              <span className="panel__menu-icon">{item.icon}</span>
              <span className="panel__menu-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <Link to="/login" className="panel__exit">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M14 7l-5 5 5 5M9 12h10"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Salir</span>
        </Link>
      </div>
    </div>
  )
}
