import styled from 'styled-components'

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '38rem' : '30rem')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #000;
	margin: 0 .75rem 1.5rem;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 25rem;
  }
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const ContentContainer = styled.div`
  height: 10rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eedf9d;
  color: #000;
  background-color: #fff;
  opacity: 0.75;
  position: absolute;
`

export const ContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0.6rem;
  font-size: 22px;
  color: currentColor;
  letter-spacing: 2px;
`

export const ContentSubtitle = styled.span`
  font-weight: 300;
  font-size: 1.6rem;
`