import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    align-items: center;
  }
`

export const CollectionTitle = styled.h2`
  font-size: 3.8rem;
  margin: 0 auto 3rem;
`

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  
  & > div {
    margin-bottom: 3rem;
  }

 @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    align-items: center;

    & > div {
    margin-bottom: 2rem;
  }
 }

 @media screen and (min-width: 500px) and (max-width: 800px) {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 2rem;

   & > div {
    margin-bottom: 2.5rem;
  }
}

 @media screen and (min-width: 800px) and (max-width: 1000px) {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 2rem;

   & > div {
    margin-bottom: 3rem;
  }
}
`