import styled from 'styled-components'
import DelightLabs from './assets/logo-lg.png'


const FlexContainer = styled.div`
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

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  width: 100%;
  height: 50vh;
`

const Logo = styled.div`
  box-shadow: 0px 10px 34px 0px rgba(0, 0, 0, .18);
  background: url(${DelightLabs}) center/cover no-repeat;
  width: 100%;
  max-width: 538px;
  height: inherit;
  max-height: 373px;
  border-radius: 8px;
  background-color: #16C79E;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    max-width: 564px;
    max-height: 391px;
    button {
      display: block;
    }
  }
`

const Button = styled.button`
  display: none;
  width: 208px;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  background-color: rgba(244,246,248,0.1);}
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 27px;
  text-align: center;
  padding: 17px 78px;
`


export { ModalContainer, Modal, Logo, Button, FlexContainer }
