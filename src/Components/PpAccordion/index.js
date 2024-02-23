import { useState } from 'react'
import ArrowIcon from './downArrow-dark.svg'
import './style.scss'

const PpAccordion = (props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <img
          src={ArrowIcon}
          className={'arrow-icon ' + (isActive ? 'up-arrow' : '')}
        />
      </div>
      {isActive && <div className="accordion-content">{props.children}</div>}
    </div>
  )
}

export default PpAccordion
