import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
const TopNav = ({ isScrolled }) => {

    const navLinks = [
        { name: "Home", link: '/' },
        { name: "Tv Show", link: '/tv' },
        { name: "My List", link: '/mylist' },
        { name: "Movies", link: '/movies' },

    ];
    const navigate = useNavigate()
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate('/login');
    });
    return (
        <NavContainer>
            <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
                <div className='leftside'>
                    <div className='logo'>
                        <img src='./logo.png'
                            alt='logo' />
                    </div>
                    <ul className='links'>
                        {
                            navLinks.map(({ name, link }) => {
                                return (
                                    <li key={name}>
                                        <Link>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='rightside'>
                    <button onClick={() => signOut(firebaseAuth)}>
                        Log out
                    </button>
                </div>
            </nav>

        </NavContainer>
    )
}
const NavContainer = styled.div`
    .notScroll{
        display: flex;
    }
    .scrolled{
        display: flex;
        background-color: black;
    }
    nav{
        position: sticky;
        top: 0;
        height: 6rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 1rem 4rem;
        align-items: center;
        transition: 0.3s ease-in-out;
        .leftside{
            display: flex;
            align-items: center;
            gap: 3rem;
            margin-left: 1.2rem;
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;

        }
        img{
            width: 7.8rem;
            height: 2.2rem;
        }
        .links{
            display: flex;
            list-style-type: none;
            gap: 3rem;
        li{
            a{
                color: white;
                text-decoration: none;
            }
        }
        }
    }
}
.rightside{
    display: flex;
    align-items: center;
    gap: 1rem;
    button{
        background-color: red;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
        color: white;
        padding: .5rem 1.5rem;
    }&:focus{
        outline: none;
    } svg{
        color: white;
        font-size: 2rem;
    }
}
`

export default TopNav
