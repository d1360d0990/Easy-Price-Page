import MailIcon from '../../atoms/icons/MailIcon'
import PhoneIcon from '../../atoms/icons/PhoneIcon'
import StoreIcon from '../../atoms/icons/StoreIcon'
import UserIcon from '../../atoms/icons/UserIcon'
import InputField from '../../molecules/InputField'
import PasswordField from '../../molecules/PasswordField'

export default function RegisterForm({
  showPassword,
  onTogglePassword,
  showConfirmPassword,
  onToggleConfirmPassword,
  onSubmit,
}) {
  return (
    <form className="login-form register-form" onSubmit={onSubmit}>
      <InputField
        type="text"
        name="comercio"
        placeholder="Nombre del comercio"
        autoComplete="organization"
        icon={StoreIcon}
        required
      />

      <InputField
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        icon={MailIcon}
        required
      />

      <InputField
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        autoComplete="tel"
        icon={PhoneIcon}
        required
      />

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
        autoComplete="new-password"
        showPassword={showPassword}
        onToggle={onTogglePassword}
      />

      <PasswordField
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        autoComplete="new-password"
        showPassword={showConfirmPassword}
        onToggle={onToggleConfirmPassword}
      />

      <button type="submit" className="login-form__submit register-form__submit">
        Crear cuenta comercio
      </button>
    </form>
  )
}
