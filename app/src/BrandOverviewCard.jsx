import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SocialBar from './SocialBar'
import { InfoContainer, HeroImage, OverlayContainer } from './StyledComponents'
import check from './assets/check.png'

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 3;
`

const Thumbnail = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 15px;
  background: url(${props => props.src}) center/cover no-repeat;
  &:last-child {
    margin-bottom: 0;
  }
  img {
    display: none;
  }
  &:hover {
    img {
      display: block;
    }
  }
`

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
