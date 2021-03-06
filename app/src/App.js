import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import './App.css'
import { Modal, ModalContainer, CloseButton, Layout } from './components/StyledComponents'
import LogoSplash from './components/LogoSplash'
import BrandOverviewCard from './components/BrandOverviewCard'
import { brandAssets } from './data'

injectGlobal`
  body {
    margin: 0;
    font-family: 'Lato';
  }
`

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
        <ModalContainer isOpen={isOpen}>
          {isOpen ? (
            <Modal>
              <CloseButton onClick={() => this.handleClick()} />
              <BrandOverviewCard brandAssets={brandAssets} />
            </Modal>
          ) : (
            ''
          )}
        </ModalContainer>
      </Layout>
    )
  }
}

export default App
