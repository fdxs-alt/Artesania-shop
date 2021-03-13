import styled from 'styled-components'

export const SliderWrapper = styled.div`
  max-width: 500px;
`

export const SelectedImage = styled.img`
  width: 500px;
  height: 400px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 1px 1px 25px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 350px;
    height: 300px;
  }
`

export const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100px;
  margin-top: 20px;
`

export const Slide = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  position: absolute;
  transition: all 200ms ease;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: pointer;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
`

export const InnerSlide = styled.img`
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
  flex-grow: 1;
`
