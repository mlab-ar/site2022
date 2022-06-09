import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/images/Manual-de-Marca-2-47-150x150.png'

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
            <img src={logo} alt="Logo Token Sport" />
        </Link>
    </LogoText>
  )
}

export default Logo