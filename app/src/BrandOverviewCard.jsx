import React from 'react'
import PropTypes from 'prop-types'
import SocialBar from './SocialBar'
import SideBar from './SideBar'
import { InfoContainer, HeroImage } from './StyledComponents'


// eslint-disable-next-line
class BrandOverviewCard extends React.Component {
  constructor(props) {
    super(props)
    this.toggleImage = this.toggleImage.bind(this)
    this.state = {
      activeImage: props.brandAssets[0],
    }
  }
  toggleImage(e) {
    console.log(e)
    const activeImage = this.props.brandAssets[e]
    this.setState({ activeImage })
  }
  render() {
    const { brandAssets } = this.props
    console.log(brandAssets)
    return (
      <React.Fragment>
        <SocialBar />
        <SideBar brandAssets={brandAssets} handleClick={this.toggleImage} />
        <InfoContainer>
          <HeroImage activeImage={this.state.activeImage.large} />
          <div className="text-container">
            <h2>The #1 Free Logo Maker - Logojoy</h2>
            <p>
              His Father was a sheriff in Bucks County and his Mother worked as a secretary in the
              office of the small township where they lived.
            </p>
            <a href="http://www.logojoy.com">www.logojoy.com</a>
          </div>
        </InfoContainer>
      </React.Fragment>
    )
  }
}

BrandOverviewCard.propTypes = {
  brandAssets: PropTypes.arrayOf(PropTypes.object),
}

export default BrandOverviewCard
