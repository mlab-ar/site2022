import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/logo.jpg'

const LogoText = styled.div`
font-size: ${props => props.theme.fontxxxl};
transition: all .2s ease;

&:hover {
    transform: scale(1.1);
}

@media (max-width: 64em) {
  font-size: ${props => props.theme.fontxxl};
}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
            <img src={logo} alt="Logo The Bit Coop" />
        </Link>
    </LogoText>
  )
}

export default Logo