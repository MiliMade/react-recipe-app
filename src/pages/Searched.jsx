import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { Grid, CuisineCard as RecipeCard } from "../components/StyledComponents"

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

useEffect(()=>{
    getSearched(params.search)
  }, [params.search])

  const getSearched = async(name)=>{
    const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`)
    const recipes = await data.data
    console.log(recipes)
    console.log(recipes.results)
    setSearchedRecipes(recipes.results)
  }
  return (
    <Grid>
        {searchedRecipes.map((recipe)=>{
        return(
          <RecipeCard key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt="" className="src" />
              <h4>{recipe.title}</h4>
            </Link>
          </RecipeCard>
        )
      })}
    </Grid>
  )
}

export default Searched