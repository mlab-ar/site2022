import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'


import img1 from '../../assets/images/empresas-aliadas/token-partner.jpeg'
import img2 from '../../assets/images/empresas-aliadas/jpm-propiedades.png'
import img3 from '../../assets/images/comunidades-amigas/flight-of-legends.png'
import img4 from '../../assets/images/medios-aliados/bisionarys.png'
import img5 from '../../assets/images/medios-aliados/cripto-latin-fest.png'
import img6 from '../../assets/images/medios-aliados/satoshis-dreams.webp'


const Section = styled.section`
min-height: 50vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;

&>*:nth-child(2) {
  animation-duration: 20s;

  @media (max-width: 30em) {
    animation-duration: 15s;
  }
}

&>*:last-child {
  animation-duration: 35s;

  @media (max-width: 30em) {
    animation-duration: 30s;
  }
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
width: fit-content;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxl};
}
`

const move = keyframes`
0% { transform: translateX(100%) }
100% { transform: translateX(-100%) }
`

const Row = styled.div`
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;
animation: ${move} linear infinite ${props => props.direction};
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.3)`};
box-shadow: 1px 1px 2px ${props => props.theme.body};
margin: auto 1rem;
width: 15rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
`

const ImgContainer = styled.div`
margin: 1rem;
cursor: pointer;
height: 8rem;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

@media (max-width: 48em) {
  width: 12rem;
}

@media (max-width: 30em) {
  width: 10rem;
}

img {
  max-width: 100%;
  max-height: 100%;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span {
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1 {
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img {
  width: 1rem;
  height: auto;
}
`


const NftItem = ({ img, passRef }) => {
  
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running'
  }

  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused'
  }

  return (
    <Container>
      <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
        <img src={img} alt="Token Sport NFT" />
      </ImgContainer>
    </Container>
  )
}

const Showcase = () => {

  const Row1Ref= useRef(null)
  //const Row2Ref= useRef(null)

  return (
    <Section id="showcase">
      <Title>Alianzas</Title>
      <Row direction='none' ref={Row1Ref}>
        <NftItem img={img6} passRef={Row1Ref} />
        <NftItem img={img1} passRef={Row1Ref} />
        <NftItem img={img2} passRef={Row1Ref} />
        <NftItem img={img3} passRef={Row1Ref} />
        <NftItem img={img4} passRef={Row1Ref} />
        <NftItem img={img5} passRef={Row1Ref} />
      </Row>
      {/* <Row direction='reverse' ref={Row2Ref}>
        <NftItem img={img7} passRef={Row2Ref} />
        <NftItem img={img8} passRef={Row2Ref} />
        <NftItem img={img9} passRef={Row2Ref} />
        <NftItem img={img10} passRef={Row2Ref} />
  </Row> */}
    </Section>
  )
}

export default Showcase