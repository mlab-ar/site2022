import styled from 'styled-components'

import alejo from '../../assets/images/team-alejo.jpeg'
import jfg from '../../assets/images/team-jfg.jpeg'
import jpr from '../../assets/images/team-jpr.jpeg'
import sol from '../../assets/images/team-sol.jpeg'
import facu from '../../assets/images/team-facu.jpeg'
import dani from '../../assets/images/team-dani.jpeg'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
  width: 80%;
}

@media (max-width: 48em) {
  width: 90%;
  justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
border: 2px solid ${props => props.theme.text};
border-radius: 20px;
transition: all .2s ease;

&:hover {
  transform: scale(1.1);
}

@media (max-width: 70em) {
  width: 50vw;
}
`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
padding: 1rem;
border-radius: 20px;
cursor: pointer;

img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  filter: grayscale(80%);
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
margin-top: 1rem;
font-weight: 400;
`


const MemberComponent = ({ img, name=" ", position=" "}) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id="team">
      <Title>Team</Title>
      <Container>
        <MemberComponent img={dani} name="Daniela Llano" position="Software Engineer" />
        <MemberComponent img={sol} name="Sol Alvar" position="Software Engineer" />
        <MemberComponent img={facu} name="Facundo Duran" position="Software Engineer" />
        <MemberComponent img={jpr} name="Juan Pablo Romano" position="Co-founder / CTO" />
      </Container>
    </Section>
  )
}

export default Team