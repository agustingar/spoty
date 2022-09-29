import React from 'react'
import { Choices } from './Styles'

const SideBarChoice = ({title, Icon}) => {
  return (
    <Choices>
      {
        Icon && <Icon/>
      }
      {
        Icon ? <h3>{title}</h3> : <h4>{title}</h4>
      }
 
        </Choices>
  )
}

export default SideBarChoice