import { useContext } from "react"
import { ThemeContext} from "../AppContext/theme-context"

export const TogglerButton = (props)=>{

    const {theme} = useContext(ThemeContext)
    console.log("botao", theme)
    return (
        <button {...props}
        style={{color:theme.color, bakckgroundColor: theme.background}}
        /> 
    )
}