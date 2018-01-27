import React from 'react'
import PropTypes from 'prop-types'
import { Logo, Button, FlexContainer } from './StyledComponents'

const LogoSplash = ({ handleClick, buttonText, hoverCTA }) => {
  return (
    <Logo>
      {hoverCTA ?
        <FlexContainer>
          <Button onClick={() => handleClick()}>{buttonText}</Button>
        </FlexContainer>
      : ''}
    </Logo>
  )
}

LogoSplash.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
  hoverCTA: PropTypes.bool,
}

export default LogoSplash
