import styled from 'styled-components'


export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1.5rem;
`

export const CartItemImage = styled.img`
  width: 30%;
`

export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;

  .name, 
  .price {
      font-size: 16px;
    }
`

