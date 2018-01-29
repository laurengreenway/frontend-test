import styled from 'styled-components'
import DelightLabs from '../assets/logo-lg.png'
import Close from '../assets/close.png'

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  border-radius: ${props => (props.small ? '4px' : '8px')};
  background-color: ${props => (props.isActive ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)')};
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${props => (props.small ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.6)')};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const InfoContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  height: inherit;
  .text-container {
    padding: 26px 25px;
    border: 1px solid #d4dbe8;
    border-top: none;
    border-radius: 0 0 4px 4px;
    h2 {
      color: #090b17;
      font-weight: 700;
      line-height: 27px;
      font-size: 18px;
    }
    p {
      color: #535971;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.1;
      line-height: 21px;
      padding-bottom: 20px;
    }
    a {
      color: #4f6df5;
      font-size: 14px;
      font-weight: 300;
      line-height: 21px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-column-start: 2;
  }
`

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isOpen ? 'rgba(0, 0, 0, 0.6)' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: ${props => (props.isOpen ? '999' : '-1')};
  transition: all 0.2s ease-in-out;
`

const Layout = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 90vw;
  max-width: 760px;
  max-height: 90vh;
  overflow-y: scroll;
  background-color: white;
  display: grid;
  grid-template-columns: 55px 120px 15px auto 53px;
  grid-template-rows: 100px auto;
  padding-bottom: 40px;
  position: relative;
  border-radius: 4px;
  @keyframes scaleUp {
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  animation: scaleUp 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  @media screen and (max-width: 768px) {
    grid-template-rows: 75px 15vh auto;
  }
`

const Logo = styled.div`
  box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, 0.18);
  background: url(${DelightLabs}) center/cover no-repeat;
  width: 100%;
  max-width: 538px;
  height: 373px;
  max-height: 373px;
  border-radius: 8px;
  background-color: #16c79e;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    button {
      display: block;
    }
  }
`
const HeroImage = styled.div`
  background: url(${props => props.activeImage}) center/cover no-repeat;
  width: 100%;
  height: 50vh;
  max-height: 358px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 4px 0 0;
  @media screen and (max-width: 768px) {
    max-height: 275px;
  }
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
  font-weight: 300;
  line-height: 27px;
  text-align: center;
  padding: 17px 78px;
`
const CloseButton = styled.button`
  background: url(${Close}) center no-repeat;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 26px;
  width: 26px;
  border: none;
  transform: rotate(0);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: rotate(90deg);
  }
`

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-column-start: 2;
  grid-column-end: 3;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    grid-column-end: 5;
  }
`

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

const Thumbnail = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 15px;
  background: url(${props => props.src}) center/cover no-repeat;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
  img {
    opacity: ${props => (props.isActive ? '1' : '0')};
    transition: all 0.2s ease-in 0.1s;
  }
  &:hover {
    cursor: pointer;
    img {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    width: calc(100% / 4 - 10px);
    height: 100%;
    max-height: 120px;
    max-width: 120px;
    &:last-child {
      margin-bottom: 15px;
    }
  }
`

export {
  Button,
  CloseButton,
  HeroImage,
  InfoContainer,
  Layout,
  Logo,
  Modal,
  ModalContainer,
  OverlayContainer,
  StyledSideBar,
  StyledSocialBar,
  Thumbnail,
}
