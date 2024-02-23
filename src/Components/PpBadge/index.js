import './style.scss'

const PpBadge = (props) => {
  return <div className={'pp-badge ' + props.theme}>{props.label}</div>
}

export default PpBadge
