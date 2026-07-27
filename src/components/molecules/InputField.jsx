export default function InputField({ icon: Icon, children, ...inputProps }) {
  return (
    <label className="login-field">
      <input {...inputProps} />
      {Icon && <Icon />}
      {children}
    </label>
  )
}
