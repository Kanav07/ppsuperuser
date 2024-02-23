import './style.scss'

const PpButton = (props) => {
  const btnClass =
    'buttonWrapper ' +
    (props.disabled || '') +
    ' ' +
    (props.size || '') +
    ' ' +
    (props.theme || '') +
    ' ' +
    (props.stretch || '') +
    ' ' +
    (props.className || '') +
    ' '

  return (
    <button
      className={btnClass}
      disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  )
}

export default PpButton
