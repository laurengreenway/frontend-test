import React from 'react'
import PropTypes from 'prop-types'

import { OverlayContainer, StyledSideBar, Thumbnail } from './StyledComponents'
import check from '../assets/check.png'

const SideBar = props => (
  <StyledSideBar>
    {props.brandAssets.map((a) => {
      const isActive = a.id === props.activeImage && a.id !== 0
      return (
        <Thumbnail
          src={a.thumbnail}
          key={a.id}
          onClick={() => props.handleClick(a.id)}
          isActive={isActive}
        >
          <OverlayContainer isActive={isActive} small>
            <img src={check} alt={`Select ${a.alt}`} />
          </OverlayContainer>
        </Thumbnail>
      )
    })}
  </StyledSideBar>
)

SideBar.propTypes = {
  brandAssets: PropTypes.arrayOf(PropTypes.object),
  activeImage: PropTypes.number,
}

export default SideBar
