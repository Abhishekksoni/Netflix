import {useState} from 'react'
import React from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import styled from 'styled-components'
import { firebaseAuth } from '../utils/firebase-config'


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error);
    }
  }
    onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser) navigate('/');
  });
  return (
    <Wrapper>
      <BackgroundImage/>
      <div className='logincontent'>
      <Header/>
      <div className='form-wrapper'>
      <div className='form'>
        <div className='title'>
          <h1>Login In</h1>
          </div>
          <div className='container'>
            <input type='text' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
            <input type='password' placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      </div>
      
 
   
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  .logincontent{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color:rgba(0,0,0,0.6) ;
    grid-template-columns: 15vh 85vh;
    .form-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
     
    }
    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background-color: rgba(0,0,0,0.6);
      height: 60vh;
      width: 55vh;
      margin-top: 2.7rem;
      padding: 1rem;
      color: white;
      border-radius: 0.4rem;

      .container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input{
          border-radius: 0.4rem;
          border: none;
          padding: 0.5rem 1rem;
          width: 20rem;
          height: 2rem;
          &:focus{
            outline: none;
          }
        }
        
        button{
          height: 3rem;
          border: none;
          border-radius :0.2rem;
          cursor: pointer;
          background-color: red;
          color: white;
          font-weight: bolder;
        }
      }
    }
  }
`

export default LoginPage
