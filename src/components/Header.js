import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Header = (props) => {
    const navigate = useNavigate()
  return (
    <HeaderContainer>
        <div className='logo'>
            <img src='./logo.png'/>
        </div>
        <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
        </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    .logo{
        img{
            padding: 1rem ;
            height: 3rem;
            cursor: pointer;
        }
    }
    button{
        padding: 0.7rem;
        background-color: red;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;

    }
    `

export default Header
