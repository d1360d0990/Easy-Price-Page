import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../components/organisms/auth/LoginForm'
import AuthTemplate from '../components/templates/AuthTemplate'
import { DEMO_PASSWORD, DEMO_USER } from '../constants/auth'
import './Login.css'
import './Register.css'

export default function Login() {
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
    <AuthTemplate>
      <LoginForm
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword((visible) => !visible)}
        error={error}
        onSubmit={handleSubmit}
      />

      <p className="register-page__footer">
        ¿No tienes cuenta? <Link to="/registro">Crear cuenta comercio</Link>
      </p>
    </AuthTemplate>
  )
}
