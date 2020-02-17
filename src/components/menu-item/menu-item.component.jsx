import React from "react"
import { withRouter } from 'react-router-dom'

import MenuItemContainer from "./menu-item.styles"


const MenuItem = ({...otherProps}) => {
  
  const { title, imageUrl, size, history, match, linkUrl } = otherProps

  return (
    <MenuItemContainer 
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`) }
      >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)
