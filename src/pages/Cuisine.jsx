import  { useState, useEffect } from "react"
import{motion} from "framer-motion"
import {Link, useParams } from "react-router-dom"
import axios from "axios"
import { Grid, CuisineCard} from "../components/StyledComponents"


const Cuisine = () => {

  const [cuisine, setCuisine] = useState([])

  let params = useParams()
  
 useEffect(()=>{
    getCuisine(params.type)
  }, [params.type])

  const getCuisine = async(name)=>{
    const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`)
    const recipes = await data.data
    console.log(recipes)
    setCuisine(recipes.results)
  }

  return (
    <Grid>
      {cuisine.map((recipe)=>{
        return(
          <CuisineCard key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt="" className="src" />
              <h4>{recipe.title}</h4>
            </Link>
          </CuisineCard>
        )
      })}
    </Grid>
  )
}



export default Cuisine