import Typewriter from 'typewriter-effect';
import styled from 'styled-components'
import Modal from './Modal';
import { useState } from 'react';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
width: 80%;
height: fit-content;
color: ${props => props.theme.text};
align-self: flex-start;


@media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}

@media (max-width: 40em) {
    width: 90%;
}
`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
margin: 2rem 0 1rem 0;
font-weight: 600;
width: 80%;
align-self: flex-start;

@media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
`

const Button = styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;
font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all .2s ease;
position: relative;
margin: 1rem;

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
  padding: 1.5rem;
}
`


const TypeWritterText = () => {

    const [active, setActive] = useState(false)
    
  return (
    <>
    <Title>
        Comparte tu pasión y conecta
        <Typewriter options={{ loop: true }}
            onInit={(typewriter) => {
                typewriter.typeString(' con la web 3.0')
                .pauseFor(3000)
                .start();
            }}
        />
        
    </Title>
    <SubTitle>
        Crea tu FanID, Aplaude o Abuchea en vivo y sé parte de la comunidad de fanáticos más grande del mundo.
    </SubTitle>
    <ButtonContainer>
        <Button onClick={() => setActive(true)}>Ver Más</Button>
        <Modal active={active} hideModal={() => setActive(false)}/>
    </ButtonContainer>
    </>
  )
}

export default TypeWritterText