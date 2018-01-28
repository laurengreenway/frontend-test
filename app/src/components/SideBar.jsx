import React from 'react'
import PropTypes from 'prop-types'

import { OverlayContainer, StyledSideBar, Thumbnail } from './StyledComponents'
import check from '../assets/check.png'

const SideBar = (props) => {
  return (
    <StyledSideBar>
      {props.brandAssets.map(a => (
        <Thumbnail src={a.thumbnail} key={a.id} onClick={() => props.handleClick(a.id)}>
          <OverlayContainer>
            <img src={check} alt={`Select ${a.alt}`} />
          </OverlayContainer>
        </Thumbnail>
        ))}
    </StyledSideBar>
  )
}

SideBar.propTypes = {
  brandAssets: PropTypes.arrayOf(PropTypes.object),
}

export default SideBar
