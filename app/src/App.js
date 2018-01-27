import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './App.css'
import { Modal, ModalContainer } from './StyledComponents'
import LogoSplash from './LogoSplash'
import BrandOverviewCard from './BrandOverviewCard'

// eslint-disable-next-line
class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      step: 1,
    }
  }
  handleClick() {
    const step = this.state.step + 1
    this.setState({
      step,
    }, () => { console.log(this.state.step) })
  }

  render() {
    const { step } = this.state
    return (
      <ModalContainer>
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3}>
              <Modal>
                {step === 1 ?
                  <LogoSplash handleClick={this.handleClick} buttonText='Share' hoverCTA /> :
                  step === 2 ? <BrandOverviewCard />
                  : <p>not done yet</p>
                }
              </Modal>
            </Col>
          </Row>
        </Grid>
      </ModalContainer>
    )
  }
}

export default App
