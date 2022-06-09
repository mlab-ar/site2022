import styled from 'styled-components'

const ModalBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
right: 0;
left: 0;
bottom: 0;
top: 0;
overflow: hidden;
padding: .4rem;
opacity: 1;
z-index: 1;
`

const ModalOverlay = styled.a`
background: rgba(247, 248, 249, 0.75);
position: absolute;
display: block;
right: 0;
left: 0;
bottom: 0;
top: 0;
`

const ModalContainer = styled.div`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
border-radius: 0.1rem;
display: flex;
flex-direction: column;
height: fit-content;
max-width: 35rem;
padding: 0 0.8rem;
width: 100%;
animation: slide-down 0.2s ease 1;
z-index: 3;
box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`

const ModalClose = styled.a`
text-decoration: none;
cursor: pointer;
font-size: 1rem;
align-self: end;
margin: 1rem 1rem 0 0;
`

const TextContainer = styled.div`
padding: 2rem 3rem;
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
font-weight: 800;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontlg};
}

@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontmd};
}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => props.theme.text};
margin: 1rem auto;

@media (max-width: 64em) {
  font-size: ${(props) => props.theme.fontsm};
}

@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontxs};
}
`


const Modal = ({hideModal, active}) => {
  return (
    <>
    {active && (
        <ModalBlock>
            <ModalOverlay onClick={() => hideModal()} />
            <ModalContainer>
                <ModalClose onClick={() => hideModal()} >X</ModalClose>
                <TextContainer>
                    <Title>¿Qué rayos es Token Sport?</Title>
                    <SubText>Token Sport es una plataforma digital de uso gratuito que permite a los usuarios interactuar En Vivo durante los eventos deportivos.</SubText>
                    <Title>¿Cómo funciona?</Title>
                    <SubText>Una vez que el usuario crea su perfil como fanático, recibe su billetera digital que utilizará para interactuar en la web 3.0 y recibir sus primeros tokens $TSP.</SubText>
                    <SubText>El token TSP es un activo digital que se distribuye mediante contratos inteligentes, permitiendo así configurar un ecosistema que reparte estos activos entre todos los participantes.</SubText>
                    <SubText>Una vez creado el perfil, el usuario podrá elegir los partidos en los que quiera interactuar y abonar su boleta con TSP.</SubText>
                    <SubText>1TSP = 1 boleta</SubText>
                </TextContainer>
            </ModalContainer>
        </ModalBlock>
    )}
    </>
  )
}

export default Modal