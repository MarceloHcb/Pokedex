import { useContext } from "react"
import { Link } from "react-router-dom"
import { PokeContext } from "../../../data/services/hooks/contexts/PokeContext"
import "./SearchButton.css"

export const SearchButton = (props) => {
    const {theme} = useContext(PokeContext)
    return (<>
        <label htmlFor="search" >  </label>
        <input type="text" name="search" id="search" placeholder="Nome ou Id do Pokemon ..." onChange={props.handleInputChange} value={props.inputs.text} />
        <Link to={`/${props.inputs.text}`} >
            <button className="search" style={{background:theme.backgroundButton, color:theme.colorButton}}> Buscar</button>
        </Link>
    </>)
}