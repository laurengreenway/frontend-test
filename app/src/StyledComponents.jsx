import styled from 'styled-components'
import DelightLabs from './assets/logo-lg.png'
import Close from './assets/close.png'


const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  border-radius: 8px;
  &:hover {
    background-color: rgba(0,0,0,0.6);
  }
`

const InfoContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  .text-container {
    padding: 26px 25px;
    border: 1px solid #D4DBE8;
    border-top: none;
    border-radius: 0 0 4px 4px;
    h2 {
      color: #090b17;
      font-weight: 900;
      line-height: 27px;
      font-size: 18px;
    }
    p {
      color: #535971;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      padding-bottom: 20px;
    }
    a {
      color: #4f6df5;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
    }
  }
`

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 999;
`

const Layout = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 66vw;
  max-width: 760px;
  background-color: white;
  display: grid;
  grid-template-columns: 55px 120px 15px auto 53px;
  grid-template-rows: 100px auto;
  padding-bottom: 40px;
  position: relative;
  border-radius: 4px;
`

const Logo = styled.div`
  box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, .18);
  background: url(${DelightLabs}) center/cover no-repeat;
  width: 100%;
  max-width: 538px;
  height: 373px;
  max-height: 373px;
  border-radius: 8px;
  background-color: #16C79E;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
    button {
      display: block;
    }
  }
`
const HeroImage = styled.div`
  background: url(${props => props.activeImage}) center/cover no-repeat;
  width: 100%;
  max-width: 538px;
  height: 373px;
  max-height: 373px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0 0;
`

const Button = styled.button`
  display: none;
  width: 208px;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  background-color: rgba(244,246,248,0.1);}
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  padding: 17px 78px;
`
const CloseButton = styled.button`
  background: url(${Close}) center/cover no-repeat;
  position: absolute;
  top: 20px;
  right: 20px;
  height: 16px;
  width: 16px;
  border: none;
`

export { ModalContainer, Modal, Logo, Button, OverlayContainer, CloseButton, InfoContainer, Layout, HeroImage }
