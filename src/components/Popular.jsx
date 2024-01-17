import axios from "axios"
import { useEffect, useState } from "react"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Wrapper, Gradient, Card } from "./StyledComponents";
import { Link } from "react-router-dom";

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
                  <Card>
                    <Link to={`/recipes/${recipe.id}`}>
                      <p >{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
      </Wrapper>
    </>
  )
}

export default Popular