import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    color: #eee;
    padding: 5px 350px;
    background-color: #e24e4e;
    justify-content: space-around;
    align-items:center ;
`

export const StyledLink = styled(NavLink)`
    text-align: center;
    text-decoration: none;
    color: #eee
`