import arrow from "../themes/images/arrow.png"
import arrowBlack from "../themes/images/arrowblack.png"
import pokelogo from "../themes/images/pokelogo.png"
import logoBlack from "../themes/images/logoblack.png"

export const themes = {
    light:{
        color:"black",
        colorH1:"rgb(247,197,7)",
        colorButton: "cornflowerblue",
        background: "linear-gradient(to bottom, red, aqua)",       
        background1:"linear-gradient(to left, red, aqua)",
        background3:"linear-gradient(to right,rgb(1,188,221), rgb(231, 58, 46))",
        logo:pokelogo,
        backgroundButton:`rgb(245, 234, 33)`,
        image:`${arrow}`             
    },
    dark:{
        color:"white",
        colorH1:"black",
        colorButton:`rgb(245, 234, 33)`,
        background:"linear-gradient(to bottom, white, black)",       
        background1:"linear-gradient(to left, white, black)",
        background3:"linear-gradient(to right,black, white",
        logo:logoBlack,
        backgroundButton:`linear-gradient(to bottom, white, black)`,       
        image:`${arrowBlack}` ,
        translate: "translate(29px)"
    },
}