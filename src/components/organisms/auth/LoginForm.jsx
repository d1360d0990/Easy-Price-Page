import UserIcon from '../../atoms/icons/UserIcon'
import InputField from '../../molecules/InputField'
import PasswordField from '../../molecules/PasswordField'

export default function LoginForm({ showPassword, onTogglePassword, error, onSubmit }) {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <InputField
        type="text"
        name="usuario"
        placeholder="Usuario"
        autoComplete="username"
        icon={UserIcon}
        required
      />

      <PasswordField
        name="password"
        placeholder="Contraseña"
        autoComplete="current-password"
        showPassword={showPassword}
        onToggle={onTogglePassword}
      />

      {error && <p className="login-form__error">{error}</p>}

      <button type="submit" className="login-form__submit">
        Login
      </button>
    </form>
  )
}
