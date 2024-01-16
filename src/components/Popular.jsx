import axios from "axios"
import { useEffect, useState } from "react"
// import styled from "styled-components"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Wrapper, Gradient, Card } from "./StyledComponents";


const Popular = () => {

  const [popular,setPopular] = useState([])

  useEffect(()=>{
    getPopular()
  }, [])

  const getPopular = async()=>{

    const check = localStorage.getItem('popular')

    if(check){
      setPopular(JSON.parse(check))
    }else{
      const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=12`)
      const data = await api.data

      localStorage.setItem('popular', JSON.stringify(data.recipes))

      console.log(data)
      setPopular(data.recipes)      
    }


  }
  
  return (
    <>
      <Wrapper>
        <h3>Popular Picks</h3>
          <Splide   
            options={ {
              type:'loop',
              perPage: 4,
              rewind:true,
              arrows:false,
              pagination:false,
              drag:'free',
              gap:'3rem'
            } }
            >
            {popular.map((recipe)=>{
              return(
                <SplideSlide key={recipe.id} >
                  <Card >
                    <p >{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
      </Wrapper>
    </>
  )
}

// const Wrapper = styled.div`
//   margin: 4rem 0rem;
// `;

// const Card= styled.div`
//   min-height:12rem;
//   border-radius:1rem;
//   overflow:hidden;
//   position:relative;

//   img{
//     border-radius:1rem;
//     position:absolute;
//     left:0;
//     width:100%;
//     height:100%;
//     object-fit:cover;
//   }

//   p{
//     position:absolute;
//     z-index:10;
//     left:50%;
//     bottom:0%;
//     transform:translate(-50%, 0%);
//     color:white;
//     text-align:center;
//     font-weight:500;
//     font-size:0.9rem;
//     height:40%;
//     display:flex;
//     justify-content:center;
//     align-items:center;

//   }
// `

// const Gradient = styled.div`
//   z-index:3;
//   position:absolute;
//   width:100%;
//   height:100%;
//   background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))

// `
export default Popular