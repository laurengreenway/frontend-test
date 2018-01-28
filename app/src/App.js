import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import './App.css'
import { Modal, ModalContainer, CloseButton, Layout } from './StyledComponents'
import LogoSplash from './LogoSplash'
import BrandOverviewCard from './BrandOverviewCard'
import { brandAssets } from './data'

injectGlobal`
  ${
  '' /* @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css?family=Lato:400,900');
  } */
}

  body {
    margin: 0;
    font-family: 'Lato';
  }
`

// eslint-disable-next-line
class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  handleClick() {
    const isOpen = !this.state.isOpen
    this.setState({
      isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <Layout>
        <LogoSplash handleClick={this.handleClick} hoverCTAText="Share" />
        {isOpen ? (
          <ModalContainer>
            <Modal>
              <CloseButton onClick={() => this.handleClick()} />
              <BrandOverviewCard brandAssets={brandAssets} />
            </Modal>
          </ModalContainer>
        ) : (
          ''
        )}
      </Layout>
    )
  }
}

export default App
