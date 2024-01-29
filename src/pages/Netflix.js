import React, { useState, useEffect } from 'react'
// import Header from '../components/Header'

import styled from 'styled-components'
// import { AiOutlineInfoCircle } from 'react-icons/ai'
// import { FaPlay } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import { fetchMovies, getGenres } from '../store'

import TopNav from '../components/TopNav'
import Card from '../components/Card'
import SliderContainer from '../components/SliderContainer'

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)


  const navigate = useNavigate()

  const movies = useSelector((state)=> state.netflix.movies)

  const generesLoaded = useSelector((state)=> state.netflix.generesLoaded)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getGenres())
  }, [dispatch]);

  useEffect(()=> {
    if(generesLoaded){
      dispatch(fetchMovies({type: "all"}))
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  // console.log(movies)
  return (
    <HeroContainer>
      <div className='hero'>
        <TopNav isScrolled={isScrolled} />
        <img className='background-image' src="./suits.jpg"
          alt='hero img' />
        <div className='container'>
          <div className='title'>
            <h1>Suits</h1>
            <p>Hello everyone, abhishek this side doing something which is exceptional and want to make an big change in this world</p>
          </div>
          <div className='buttons'>
            <button onClick={() => navigate('/player')} className='play'>Play</button>
            <button className='more'>More Info</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </HeroContainer>

  )
}

const HeroContainer = styled.div`
 .hero {
  position: relative;
.background-image{
  filter: brightness(60%);
}
  img{
    height: 90vh;
    width: 100%;
    
  }
  .container{
    position: absolute;
    bottom: 1rem;
    .title{
      h1{
        margin-left: 5rem;
        text-align: left;
        text-transform: uppercase;
        font-size: 63px;
        background: red;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
      }
      p{
        margin-bottom: -50px;
        text-align: left;
        width: 640px;
        margin-left: 5rem;
        color: white;
        font-family: "lexend Deca", sans-serif;
      }
    }
    .buttons{
      display: flex;
      margin:5.3rem;
      gap: 2rem;
    }
    .play{
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      border-radius: .6rem;
      font-size:1.4rem;
      gap: 1rem;
      border: none;
      padding: 0.7rem 3rem;
      cursor: pointer;
    }
    .more{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(128, 128, 128, 0.8);;
      border: none;
      opacity: .1rem;
      color: white;
      border-radius: .6rem;
      font-size:1.4rem;
      gap: 1rem;
      padding: 0.7rem 1.7rem;
      cursor: pointer;
    }
  }
 }
`

export default Netflix
