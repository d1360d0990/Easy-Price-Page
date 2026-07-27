import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Login.css'
import './Register.css'

const DEMO_USER = 'gerencia'
const DEMO_PASSWORD = 'gerencia'

function UserIcon() {
  return (
    <svg className="login-field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg className="login-field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3l18 18M10.5 10.677A3 3 0 0 0 12 15a3 3 0 0 0 2.823-1.5M7.362 7.561C8.68 6.789 10.29 6.25 12 6.25c5.5 0 9.75 5.75 9.75 5.75a16.9 16.9 0 0 1-3.456 3.956M9.88 9.88a3 3 0 0 0 4.24 4.24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg className="login-field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.25 12s3.75-6.25 9.75-6.25S21.75 12 21.75 12s-3.75 6.25-9.75 6.25S2.25 12 2.25 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.currentTarget)
    const usuario = formData.get('usuario')?.toString().trim() ?? ''
    const password = formData.get('password')?.toString() ?? ''

    if (usuario === DEMO_USER && password === DEMO_PASSWORD) {
      navigate('/panel')
      return
    }

    setError('Usuario o contraseña incorrectos.')
  }

  return (
    <div className="login-page">
      <Link to="/" className="login-page__back">
        ← Volver
      </Link>

      <div className="login-page__content">
        <img src={logo} alt="Easy Price" className="login-page__logo" />

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-field">
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              autoComplete="username"
              required
            />
            <UserIcon />
          </label>

          <label className="login-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="login-field__toggle"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </label>

          {error && <p className="login-form__error">{error}</p>}

          <button type="submit" className="login-form__submit">
            Login
          </button>
        </form>

        <p className="register-page__footer">
          ¿No tienes cuenta? <Link to="/registro">Crear cuenta comercio</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
