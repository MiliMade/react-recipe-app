import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Wrapper, Gradient, Card } from "./StyledComponents";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Veggie = () => {

  const [veggie,setVeggie] = useState([])

  useEffect(()=>{
    getVeggie()
  }, [])

  const getVeggie = async()=>{

    const check = localStorage.getItem('veggie')

    if(check){
      setVeggie(JSON.parse(check))
    }else{
      const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.data

      localStorage.setItem('veggie', JSON.stringify(data.recipes))

      console.log(data)
      setVeggie(data.recipes)      
    }


  }
  
  return (
    <>
      <Wrapper>
        <h3>Our Veggie Picks</h3>
          <Splide   
            options={ {
              type:'loop',
              perPage: 3,
              rewind:true,
              arrows:false,
              pagination:false,
              drag:'free',
              gap:'3rem'
            } }
            >
            {veggie.map((recipe)=>{
              return(
                <SplideSlide key={recipe.id} >
                  <Card >
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

export default Veggie