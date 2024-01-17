import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { Button, Info, DetailWrapper, ButtonGroup } from "../components/StyledComponents";

const Recipe = () => {

  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const params = useParams()

  useEffect(()=>{
    
 
  const getRecipeDetails = async() =>{

    const data = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`)
  
    const detailData = await data.data
    console.log(detailData)
    setDetails(detailData)
  }
getRecipeDetails();
}, [params.name])



  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}  </h2> 
        <img src={details.image} alt="" />
      </div>
      <Info>
        <ButtonGroup>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
          <Button className={activeTab === 'instructions' ? 'active' : ''}  onClick={()=>setActiveTab('ingredients')}>Ingredients</Button>
        </ButtonGroup>
        <div>
          <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        </div>
        {/* <ul>
          {details.extendedIngredients.map((ingredient)=>{
            <li key={ingredient.id}>{ingredient.original}</li>
          })}
        </ul> */}
      </Info>
      
    </DetailWrapper>

  )
} 

export default Recipe