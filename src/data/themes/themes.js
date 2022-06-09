import arrow from "../themes/images/arrow.png"
import arrowBlack from "../themes/images/arrowblack.png"
export const themes = {
    light:{
        color:"black",
        colorH1:"rgb(247,197,7)",
        colorButton: "cornflowerblue",
        background: "linear-gradient(to bottom, red, aqua)",       
        background1:"linear-gradient(to left, red, aqua)",
        background3:"linear-gradient(to right,rgb(1,188,221), rgb(231, 58, 46))",
        logo:"https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png",
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
        logo:"https://pokemongeral.files.wordpress.com/2016/11/cropped-349341-4daff8489eb34948851ec973240fde19.png",
        backgroundButton:`linear-gradient(to bottom, white, black)`,       
        image:`${arrowBlack}` ,
        translate: "translate(29px)"
     },
}