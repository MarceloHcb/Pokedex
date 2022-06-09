import React, { useContext } from "react"
import styled from "styled-components"
import { PokeContext } from "../../../data/services/hooks/contexts/PokeContext"
import {Nintendo} from "../Nintendo/Nintendo"

export const Body = () => {
    const {theme} = useContext(PokeContext)  
    
    return (
        <Div 
        style={{background: theme.background}}>            
            <ImageLogo className="img" src={theme.logo} alt="" />
            <Nintendo />            
        </Div>
    )
}
const Div = styled.div`
    width: 100%;
    height: 100vh;    
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;   
`
const ImageLogo = styled.img`
    width: 250px;   
    height: 100px;
    margin-bottom: 20px;    
`