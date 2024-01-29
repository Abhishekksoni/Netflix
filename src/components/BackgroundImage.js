import React from 'react'
import styled from 'styled-components'
const BackgroundImage = () => {
  return (
    <div>
      <BackgroundContainer>
        <img src='./xx.png' alt='no internet connection'/>
      </BackgroundContainer>
    </div>
  )
}

  const BackgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;

    img{
        height: 100vh;
        width: 100vw;
    }

  `

export default BackgroundImage
