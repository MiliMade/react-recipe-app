import styled from "styled-components"
import {NavLink} from "react-router-dom"
 
export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card= styled.div`
  min-height:12rem;
  border-radius:1rem;
  overflow:hidden;
  position:relative;

  img{
    border-radius:1rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%, 0%);
    color:white;
    text-align:center;
    font-weight:500;
    font-size:0.9rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;

  }
`

export const Gradient = styled.div`
  z-index:3;
  position:absolute;
  width:100%;
  height:100%;
  background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))

`

export const List = styled.div`
  display:flex;
  justify-content:center;
  margin:2rem 0rem;
  color:rgb(157, 2, 8);
`

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(15rem, 1fr)) ;
  grid-gap:3rem;
`

export const CuisineCard = styled.div`
  img{
    width:100%;
    border-radius:2rem;
  }
  a{
    text-decoration:none;
  }
  h4{
    text-align:center;
    padding:1rem;
    color:white;
  }
`

export const SLink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  border-radius:50%;
  border:1px solid rgb(157, 2, 8);
  margin-right:2rem;
  text-decoration:none;
  width:6rem;
  height:6rem;
  cursor:pointer;
  transform:scale(0.8);

  h4{
    color:rgb(157, 2, 8);
    font-size:0.8rem
  }

  svg{
    color:rgb(157, 2, 8);
    font-size:1.5rem;
  }

  &.active{
    background: linear-gradient(to right, rgb(244, 140, 6), rgb(208, 0, 0));
    h4{
      color:white;
    }
    svg{
      color:white;
    }
  }
`

export const FormStyle = styled.form`
  margin:0rem 10rem;

  div{
    position:relative;
    width:100%;
  }
  input{
    border:none;
    background:linear-gradient(35deg,#141414, #111111);
    font-size: 1.5rem;
    color:white;
    padding: 1rem 3rem;
    border:none;
    border-radius:1rem;
    width:100%;
  }
  svg{
    position:absolute;
    top:40%;
    left:5%;
    transform: translate(100% -50%);
    color:white;
  }
`

export const DetailWrapper = styled.div`
  margin-top:10rem;
  margin-bottom:5rem;
  display:flex;
  .active{
    color:white;
    background:linear-gradient(35deg,#141414, #111111);
  }
  h2{
    margin-bottom:2rem;
    color:white;
  }
  li{
    font-size: 1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top:2rem;
  }
`
export const Button = styled.button`
  padding:1rem 2rem;
  color: #313131;
  background: white;
  border:2px solid black;
  margin-right:2rem;
  font-weight:600;
`
export const ButtonGroup =styled.div`
  display:flex;
  justify-content: space-around;
`

export const Info = styled.div`
  margin-left:3rem;
  h3{
    color:white;
    font-size: 1rem; 
    font-weight:400;
  }
`