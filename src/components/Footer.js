import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'
import Facebook from '../Icons/Facebook'
import LinkedIn from '../Icons/LinkedIn'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import Discord from '../Icons/Discord'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
position: relative;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${props => props.theme.text};

@media (max-width: 48em) {
  width: 90%;
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
  width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 0 auto 1rem auto;

a {
  fill: ${props => props.theme.text};
}

&>*{
  padding-right: 0.5rem;
  transition: all .2s ease;

  &:hover {
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
  display: none;
}
`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after {
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width .3s ease;
}

&:hover::after {
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: .5rem auto;
display: flex;
justify-content: space-between;
align-items: center;

a {
  text-decoration: underline;
}

@media (max-width: 48em) {
  flex-direction: column;
  width: 100%;

  span {
    margin-bottom: 1rem;
  }
}
`


const Footer = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href='#' target='_blank' rel="noopener">
              <Facebook />
            </a>
            <a href='https://www.linkedin.com/company/tokensport/' target='_blank' rel="noopener">
              <LinkedIn />
            </a>
            <a href='https://twitter.com/TokenSport' target='_blank' rel="noopener">
              <Twitter />
            </a>
            <a href='#' target='_blank' rel="noopener">
              <Instagram />
            </a>
            <a href='https://discord.gg/SCPwaDAt' target='_blank' rel="noopener">
              <Discord />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo('home')}>Home</Item>
          <Item onClick={() => scrollTo('about')}>About</Item>
          <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
          <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
          <Item onClick={() => scrollTo('team')}>Team</Item>
          <Item onClick={() => scrollTo('faq')}>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Token Sport. All rigths reserved.
        </span>
        <span>
          Made with &#10084; by <a href="#" target="_blank" rel="noopener noreferrer">The Bit Coop</a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer