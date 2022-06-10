import styled, { ThemeProvider } from 'styled-components'
import Button from '../Button'
import { light } from '../../styles/Themes'
import appDesign from '../../assets/images/PRUEB2-768x1129.png'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
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

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
width: 80%;
color: ${props => props.theme.body};
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

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
margin: 1rem auto;
font-weight: 600;
width: 80%;
align-self: flex-start;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontsm};
}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
width: 80%;
color: ${props => props.theme.body};
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

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
width: 80%;
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.fontsm};
}

@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontxs};
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


const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <ImageContainer>
            <img src={appDesign} alt='The Bit Coop' />
          </ImageContainer>
        </Box>
        <Box>
          <SubTitle>
            Primera Edición
          </SubTitle>
          <Title>
            Qatar 2022
          </Title>
          <SubText>
          Apuesta por el jugador más aplaudido o más abucheado del partido, participa de trivias deportivas, interactúa con la comunidad y gana más $TSP con los que podrás adquirir productos, servicios y muchos beneficios más.
          </SubText>
          <SubTextLight>
            Disponible Octubre 2022
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={light}>
              <Button text="Sumate a nuestro Discord" link="https://discord.gg/SCPwaDAt" target="_blank"/>
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About