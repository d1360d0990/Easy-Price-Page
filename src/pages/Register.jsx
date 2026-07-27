import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Login.css'
import './Register.css'

function StoreIcon() {
  return (
    <svg className="login-field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10h16M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M5 10l1 10h12l1-10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="login-field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="login-field__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4h2l1 5-2 1a11 11 0 0 0 5 5l1-2 5 1v2a2 2 0 0 1-2 2A14 14 0 0 1 4 10a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="login-page register-page">
      <Link to="/" className="login-page__back">
        ← Volver
      </Link>

      <div className="login-page__content register-page__content">
        <img src={logo} alt="Easy Price" className="login-page__logo register-page__logo" />

        <div className="register-page__header">
          <h1>Crear cuenta comercio</h1>
          <p>Registra tu negocio y empieza tu prueba de 15 días gratis.</p>
        </div>

        <form className="login-form register-form" onSubmit={handleSubmit}>
          <label className="login-field">
            <input
              type="text"
              name="comercio"
              placeholder="Nombre del comercio"
              autoComplete="organization"
              required
            />
            <StoreIcon />
          </label>

          <label className="login-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              required
            />
            <MailIcon />
          </label>

          <label className="login-field">
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              autoComplete="tel"
              required
            />
            <PhoneIcon />
          </label>

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
              autoComplete="new-password"
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

          <label className="login-field">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="login-field__toggle"
              onClick={() => setShowConfirmPassword((visible) => !visible)}
              aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </label>

          <button type="submit" className="login-form__submit register-form__submit">
            Crear cuenta comercio
          </button>
        </form>

        <p className="register-page__footer">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
