import styled from 'styled-components'
import logo from '../assets/images/logo.jpg'

const ImageContainer = styled.div`
width: 100%;

img {
    width: 100%;
    height: auto;
}

@media (max-width: 48em) {
  min-width: 40vh;
}
`

function CoverImage() {
  return (
    <ImageContainer>
      <img src={logo} />
    </ImageContainer>
  )
}

export default CoverImage