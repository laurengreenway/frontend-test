import React from 'react'
import styled from 'styled-components'

import Facebook from '../assets/facebook@3x.png'
import Twitter from '../assets/twitter@3x.png'
import Email from '../assets/email@3x.png'
import Link from '../assets/link@3x.png'

const StyledSocialBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 6;
  padding: 25px;
  img {
    width: 35px;
    height: 35px;
    margin-left: 8px;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    height: 19px;
    width: 75px;
    color: #090b17;
    font-family: Avenir;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
  }
`

const SocialBar = () => {
  const socialsArray = [
    { src: Facebook, alt: 'Facebook' },
    { src: Twitter, alt: 'Twitter' },
    { src: Email, alt: 'Email' },
    { src: Link, alt: 'Link' },
  ]
  return (
    <StyledSocialBar>
      <p>Share with:</p>
      {socialsArray.map(icon => <img src={icon.src} alt={icon.alt} key={icon.src} />)}
    </StyledSocialBar>
  )
}

export default SocialBar
