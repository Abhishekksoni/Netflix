import {useState} from 'react'
import React from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import styled from 'styled-components'
import { firebaseAuth } from '../utils/firebase-config'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import { useNavigate } from 'react-router-dom'
const SignUpPage = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [formValues, setformValues] = useState({email: "", password: ""})
 
  const navigate = useNavigate()
  const handleSignIn = async () => {
    try {
       const {email, password} = formValues
       await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser) navigate('/')
  });

  return (
    <Container>
      <BackgroundImage/>
      <div className='content'>
        <Header login/>
        <div className='body'>
          <div className='text'>
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>Watch anywhere, cancel anytime</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
    
        <div className='form'>
          {
            showPassword ? (
              <input type='password' placeholder='password' name='password'
               value={formValues.password}
               onChange = {(e) => setformValues({
                ...formValues, [e.target.name]: e.target.value
               })}
                />
              
            ):(<input type='email' placeholder='Email address' name='email'
            value={formValues.email}
            onChange = {(e) => setformValues({
             ...formValues, [e.target.name]: e.target.value
            })}
            />
         ) }

         {
          !showPassword ? (
            <button onClick={() => setshowPassword(true)}>Get Started</button>
          ): <button onClick={handleSignIn}>Sign Up</button>
         }
        
          
          
          
          

        </div>
      </div>
      </div>
    </Container>
  )
}
  const Container = styled.div`
     position: relative;
     .content{
      position: absolute;
      top: 0;
      left: 0;
      background-color:rgba(0,0,0,0.6) ;
      height: 100vh;
      width: 100vw;
      grid-template-columns: 15vh 85vh;
      .body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.7rem;
        color: white;
      }
      h1{
        margin-top: 10rem;
        padding: 0.25rem;
      }
      h4{
        margin-top: 1rem;
      }
      h6{
        margin-top: 1rem;
      }
      .form{
        display: grid;
        width:60% ;
        padding-top:2rem;
        padding-left: 4rem;
        grid-template-columns: ${({showPassword}) => showPassword? "1fr 1fr" : "2fr 1fr"};
        input{
          border-radius: .4rem;
          border: none;
          color: black;
          padding: 1rem;
          font-size: 1rem;
          &:focus{
            outline: none;
          }
        }
        button{
          cursor: pointer;
          border-radius: .4rem;
          border: none;
          margin-left: .3rem;
          padding: 0.5rem 1rem;
          background-color: red;
          color: white;
          font-weight: bolder;
          font-size: 0.9rem;
          width: 11rem;
        }
      }
     }
  `

export default SignUpPage
