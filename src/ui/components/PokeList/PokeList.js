import { usePokeInfo } from "../../../data/services/hooks/usePokeInfo/usePokeInfo"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import "./PokeList.css"
import { useContext } from "react"
import { PokeContext } from "../../../data/services/hooks/contexts/PokeContext"
import { SearchButton } from "../SearchButton/SearchButton"
export const PokeList = () => {
const {theme} = useContext(PokeContext)        
const {      
next,
previous,
setUrl,
url,
handleInputChange,
inputs,
loading,       
setOffset,
offset,
pokemons

} = usePokeInfo()   

return (
<>
<Div  style={{background: theme.background1}}>
{loading ? <div className="loading"><h1>Loading ...</h1></div> :
pokemons.map((item, index) => {
return (
<> 
<div className='poks' key={index}>
<Link to={`/${item.name}`} >
<h2>{item.name} {item.id}</h2>
<img src={item.sprites.other.home.front_default} alt="Pokemon" />
<h2>  {item.types[0].type.name}  </h2>
</Link>
</div>
{
next && <div className="arrow"  onClick={() => {
setOffset(offset+10)
setUrl(next)
}}>
<img src={theme.image} alt="Arrow "></img>
</div>
}
{
previous && <div className="arrow previous" onClick={() => {
setOffset(offset-10)
setUrl(previous)
}}>
<img  src={theme.image} alt="Arrow "></img>
</div>
}
</>
)
})
}
<SearchButton inputs={inputs} handleInputChange={handleInputChange}/>
</Div>
</>
    )
}

const Div = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
width: 100%; 
@media(max-width: 500px){
    grid-template-columns: repeat(2,1fr);
}
`
