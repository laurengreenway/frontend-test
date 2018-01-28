import React from 'react'
import PropTypes from 'prop-types'
import { Logo, Button, OverlayContainer } from './StyledComponents'

const LogoSplash = ({ handleClick, hoverCTAText }) => {
  return (
    <Logo>
      <OverlayContainer>
        <Button onClick={() => handleClick()}>{hoverCTAText}</Button>
      </OverlayContainer>
    </Logo>
  )
}

LogoSplash.propTypes = {
  handleClick: PropTypes.func,
  hoverCTAText: PropTypes.string,
}

export default LogoSplash
