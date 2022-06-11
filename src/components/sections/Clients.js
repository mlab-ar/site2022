import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import { dark } from '../../styles/Themes'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em) {
  width: 85%;
}

@media (max-width: 64em) {
  width: 100%;
  flex-direction: column;

  &>*:last-child {
    width: 80%;
  }
}

@media (max-width: 40em) {
  &>*:last-child {
    width: 90%;
  }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em) {
  min-height: 50vh;
}
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;
margin: 0 auto;
font-weight: 800;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
}

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxl};
}

@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontlg};
}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;
margin: 1rem auto;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontsm};
}
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
margin: 1rem auto;
display: flex;

@media (max-width: 64em) {
  width: 100%;
  
  button {
    margin: 0 auto;
  }
}
`


const clients = () => {
  return (
    <Section id="clients">
      <Container>
        <Box>
          <Title>
            Clients
          </Title>
          <SubText>
          This are the clients who trusted and keep trusting on us to be their technological partners.
          </SubText>
        </Box>
        <Box>
          <Carousel />
        </Box>
      </Container>
    </Section>
  )
}

export default clients