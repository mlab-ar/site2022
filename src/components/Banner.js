import styled from 'styled-components'
import img from '../assets/hinchada-futbol.jpg'


const Section = styled.section`
width: 100vw;
height: fit-content;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-bottom: 2px solid ${props => props.theme.text};
background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
background-image: url(${img});
filter: grayscale(50%);
background-position: bottom;
display: flex;
justify-content: space-evenly;
align-items: center;
overflow: hidden;

@media (max-width: 48em) {
    flex-direction: column;
}
`

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img {
    width: 100%;
    height: auto;
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
padding: 1rem 2rem;
width: 45%;
z-index: 1;
text-shadow: 1px 1px 2px ${props => props.theme.body};

@media (max-width: 64em) {
    width: 40%;
    font-size: ${props => props.theme.fontxxl};
    text-align: center;
}

@media (max-width: 48em) {
    width: 100%;
    font-size: ${props => props.theme.fontxl};
    padding: 2rem 0;
}
`

const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: center;

@media (max-width: 48em) {
    width: 100%;
    justify-content: center;
}
`

const JoinNow = styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all .2s ease;
position: relative;
margin: 1rem;

a {
    z-index: 1;
    position: relative;
}

@media (max-width: 48em) {
    padding: 1rem 2rem;
}

@media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${props => props.theme.fontsm};
}

&:hover {
    transform: scale(0.9);
}

&::after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after {
    transform: translate(-50%, -50%) scale(1.1);
    padding: 2.2rem;
}
`



const Banner = () => {
  return (
    <Section>
        <Title>Sumate a nuestra comunidad</Title>
        <BtnContainer>
            <JoinNow>
                <a href="https://discord.gg/SCPwaDAt" target="_blank" rel="noopener">Discord</a>
            </JoinNow>
        </BtnContainer>
    </Section>
  )
}

export default Banner