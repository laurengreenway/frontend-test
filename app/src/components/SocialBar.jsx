import React from 'react'
import { StyledSocialBar } from './StyledComponents'

import Facebook from '../assets/facebook@3x.png'
import Twitter from '../assets/twitter@3x.png'
import Email from '../assets/email@3x.png'
import Link from '../assets/link@3x.png'

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
