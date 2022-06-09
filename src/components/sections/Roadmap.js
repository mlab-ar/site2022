import React from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
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

const Container = styled.div`
width: 70%;
height: fit-content;
background-color: ${props => props.theme.text};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em) {
  width: 80%;
}

@media (max-width: 48em) {
  width: 90%;
}
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
  width: 90%;
}

&>*:nth-of-type(2n +1) {
  justify-content: start;

  @media (max-width: 48em) {
    justify-content: center;
  }

  div {
    border-radius: 50px 0 50px 0;
    text-align: right;

    @media (max-width: 48em) {
      border-radius: 0 50px 0 50px;
      text-align: left;

      p {
        border-radius: 0 40px 0 40px;
      }
    }
  }

  p {
    border-radius: 40px 0 40px 0;
  }
}

&>*:nth-of-type(2n) {
  justify-content: end;

  @media (max-width: 48em) {
    justify-content: center;
  }

  div {
    border-radius: 0 50px 0 50px;
    text-align: left;
  }

  p {
    border-radius: 0 40px 0 40px;
  }
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
margin: 1rem auto;

@media (max-width: 48em) {
  justify-content: flex-end !important;
}
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.body};

@media (max-width: 48em) {
  width: 70%;
}
`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.body};
`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.body};

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
}
`

const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
color: ${props => props.theme.body};
font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxs};
}
`


const Roadmap = () => {

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Mayo 2022</SubTitle>
                <Text>Web 3.0</Text>
                <Text>NFT Minting site</Text>
                <Text>Social Media</Text>
                <Text>Nuevas Incorporaciones al Dream Team</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Junio 2022</SubTitle>
                <Text>Construcción de comunidad</Text>
                <Text>Alianzas con comunidad NFT</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Julio 2022</SubTitle>
                <Text>Pre-Venta de espacios publicitarios</Text>
                <Text>Alianzas comerciales</Text>
                <Text>NFT Edition pre-venta (Ethereum)</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Agosto 2022</SubTitle>
                <Text>NFT Edition venta pública (Polygon)</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Septiembre 2022</SubTitle>
                <Text>Prueba de concepto (Privada)</Text>
                <Text>Nuevos Negocios (Medios de Comunicación)</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Octubre 2022</SubTitle>
                <Text>Estudio Token Sport (Buenos Aires)</Text>
                <Text>Presentación Oficial de Token Sport Qatar</Text>
                <Text>Campaña PFP</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Noviembre 2022</SubTitle>
                <Text>Viviendo Qatar 2022</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Diciembre 2022</SubTitle>
                <Text>Evento y Cierre del año</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Q1 2023</SubTitle>
                <Text>Consolidación del Dream Team Inicial</Text>
                <Text>Lanzamiento DAO</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Q2 2023</SubTitle>
                <Text>Segunda expansión de Token Sport</Text>
                <Text>Desarrollo del DEX</Text>
              </Box>
            </ItemContainer>
          </Item>
          <Item>
            <ItemContainer>
              <Box>
                <SubTitle>Q3 2023</SubTitle>
                <Text>Aporte de liquidez al DEX</Text>
              </Box>
            </ItemContainer>
          </Item>
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap