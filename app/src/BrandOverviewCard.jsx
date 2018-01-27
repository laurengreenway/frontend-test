import React from 'react'
import LogoSplash from './LogoSplash'

const SocialBar = () => (
  <div><p>Share: Social Buttons Go Here</p></div>
)


class BrandOverviewCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SocialBar />
        <LogoSplash />
        <p>lorem something</p>
      </React.Fragment>
    )
  }
}

export default BrandOverviewCard
