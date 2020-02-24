import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 800px) {
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 7rem;

  @media screen and (max-width: 800px) {
    width: 5rem;
    padding: 0;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

   @media screen and (max-width: 800px) {
    width: 100%;
    padding: 1rem;
  }
`
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   font-size: 2rem;
//   cursor: pointer;
// `

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `