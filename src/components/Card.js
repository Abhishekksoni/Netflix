import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";


export default React.memo(function Card ({movieData})  {

    const [onHovered, setOnHovered] = useState(false)

    const navigate = useNavigate()
    return (
        <CardContainer
            onMouseEnter={() => setOnHovered(true)}
            onMouseLeave={() => setOnHovered(false)}
        >
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                onClick={() => navigate('/player')}
            />
            {onHovered && (
                <div className='Hover'>
                    <div className='image-video-wrapper'>
                        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                            onClick={() => navigate('/player')}
                        />
                        <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
                            autoPlay loop controls muted
                        />
                    </div>
                    <div className='info-container'>
                        <h3 className='movieName' onClick={()=> navigate('/player')}>{movieData.name}</h3>
                        <div className='icons'>
                            <IoPlayCircleSharp
                            title = "play"
                            onClick={() => navigate('/player')}
                            />
                            <RiThumbUpFill
                            title = 'like'
                            />
                            <BsCheck
                            title='Remove from List'
                            />
                            <AiOutlinePlus
                            title='Add to your List'
                            />
                        </div>
                        <div className='info'>
                            <BiChevronDown
                            title='More Info'
                            />
                        </div>
                    </div>
                    <div className='genre'>
                        <ul>
                            {movieData.genres.map((genre) => {
                                <li>
                                    {genre}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>

            )}
        </CardContainer>

    )
})
const CardContainer = styled.div`

    margin-top: 1rem;
    max-width: 230px;
    width: 230px;
    height: 100%;
    cursor: pointer;
    position: relative;
    /* background-color: red; */
    img{
        border-radius: 0.2rem;
        width: 100%;
        height: 100%;
        z-index: 10;
        border-radius: 0.5rem;
    }
    .Hover{
        z-index: 99;
        height: max-content;
        width: 20rem;
        position: absolute;
        top: -10vh;
        left: 0;
        border-radius: 0.5rem;
        border: 0.1rem solid gray;
        background-color:#181818 ;
        transition: 2s ease-in-out;
        .image-video-wrapper{
            position: relative;
            height: 150px;
            img{
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                left:0;
                z-index: 4;
                position: absolute;
            }
            video{
                width: 100%;
                height: 150px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                left: 0;
                z-index: 4;
                position: absolute;
            }
        }
        .info-container{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 0.5rem;
            .movieName{
                color: white;
                text-align: left;
            }
        }
        .icons{
            display: flex;
            justify-content: space-between;
            .controls{
                display: flex;
                gap: 0.5rem;
            }
        
        svg{
            color: white;
            /* padding: 1rem; */
            border: 0.1rem solid white;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            transition: 1s ease-in-out;
        } &:hover{
            color: gray;
            
     
        }
    }
    .genre{
        display: flex;
        color: white;
        margin-top: -1rem;
        ul{
            display: flex;
            gap: 1rem;
            li{
                padding-right:0.7rem ;
                
                &:first-of-type{
                    list-style-type: none;
                }
            }
        }
    }
    }
  `

