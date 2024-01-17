import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FormStyle } from './StyledComponents'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate();

  function handleInput(e){
    setInput(e.target.value)
  }

  function submitHandler(e){
    e.preventDefault()
    navigate("/searched/" + input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
       <input type="text" value={input} onChange={handleInput}/>       
      </div>

    </FormStyle>
  )
}

export default Search