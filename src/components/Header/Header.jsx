import React from 'react'
import { StyledHeader, StyledLink } from './Header.style'

const Header = () => {
  return (
    <StyledHeader>
      <h3>Movies Database</h3>
      <StyledLink style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none',})} to='/'> Home </StyledLink>
      <StyledLink style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none',})} to='/movies'>Search</StyledLink>

    </StyledHeader>
  )
}

export default Header
