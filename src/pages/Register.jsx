import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/organisms/auth/RegisterForm'
import AuthTemplate from '../components/templates/AuthTemplate'
import './Login.css'
import './Register.css'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <AuthTemplate
      pageClass="register-page"
      contentClass="register-page__content"
      logoClass="register-page__logo"
    >
      <div className="register-page__header">
        <h1>Crear cuenta comercio</h1>
        <p>Registra tu negocio y empieza tu prueba de 15 días gratis.</p>
      </div>

      <RegisterForm
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword((visible) => !visible)}
        showConfirmPassword={showConfirmPassword}
        onToggleConfirmPassword={() => setShowConfirmPassword((visible) => !visible)}
        onSubmit={handleSubmit}
      />

      <p className="register-page__footer">
        ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </AuthTemplate>
  )
}
