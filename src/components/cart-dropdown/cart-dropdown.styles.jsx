import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 12rem;
  right: 28rem;
  z-index: 5;
`

// Extend CustomButton styles
export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`

export const CartEmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`

export const CartItemsContainer = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

