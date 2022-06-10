import Typewriter from 'typewriter-effect';
import styled from 'styled-components'
import Modal from './Modal';
import { useState } from 'react';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
width: 80%;
height: fit-content;
color: #000000;
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
color: #000000;
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
        We are
        <Typewriter options={{ loop: true }}
            onInit={(typewriter) => {
                typewriter.typeString(' The Bit Coop')
                .pauseFor(3000)
                .start();
            }}
        />
        
    </Title>
    <SubTitle>
        We are software developers, geeks, nerds and hackers who are tweaking with technology since we were kids eons ago and we love it.
    </SubTitle>
    <ButtonContainer>
        <Modal active={active} hideModal={() => setActive(false)}/>
    </ButtonContainer>
    </>
  )
}

export default TypeWritterText