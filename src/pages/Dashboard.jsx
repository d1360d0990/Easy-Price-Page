import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Dashboard.css'

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'productos',
    label: 'Productos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 8l8-4 8 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M4 8h16M12 4v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'escaneos',
    label: 'Escaneos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h4v4H4V4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4h4v4h-4V4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M4 16h4v4H4v-4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9h2M13 9h2M9 13h6M9 17h2M13 17h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 16h4v4h-4v-4Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'tendencias',
    label: 'Tendencias',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 18l5-6 4 3 7-10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 5h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'reportes',
    label: 'Reportes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 16V12M12 16V8M16 16V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'asistente',
    label: 'Asistente IA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 8a7 7 0 0 1 14 0v5a3 3 0 0 1-3 3h-1l-2 3-2-3H8a3 3 0 0 1-3-3V8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M9 11h6M9 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Dashboard() {
  return (
    <div className="panel">
      <div className="panel__container">
        <header className="panel__header">
          <img src={logo} alt="Easy Price" className="panel__logo" />
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

export default Dashboard
