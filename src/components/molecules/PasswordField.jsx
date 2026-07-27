import EyeIcon from '../atoms/icons/EyeIcon'
import EyeOffIcon from '../atoms/icons/EyeOffIcon'
import InputField from './InputField'

export default function PasswordField({
  name,
  placeholder,
  autoComplete,
  showPassword,
  onToggle,
  ...inputProps
}) {
  return (
    <InputField
      type={showPassword ? 'text' : 'password'}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required
      {...inputProps}
    >
      <button
        type="button"
        className="login-field__toggle"
        onClick={onToggle}
        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      >
        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
      </button>
    </InputField>
  )
}
