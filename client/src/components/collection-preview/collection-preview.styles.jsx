import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 500px) {
    align-items: center;
  }
`

export const CollectionTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 2.5rem;
    cursor: pointer;

    &:hover {
    color: grey;
  }
`

export const PreviewContainer  = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 500px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
  }

    @media screen and (min-width: 500px) and (max-width: 800px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
  }

    @media screen and (min-width: 800px) and (max-width: 1000px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
  }
  ` 
