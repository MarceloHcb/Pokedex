import { createGlobalStyle } from 'styled-components';
import { PokeProvider } from './data/services/hooks/contexts/PokeContext';
import { Body } from "./ui/components/Body/Body"

function App() {  
  
  return (   
      <>      
      <PokeProvider>
      <GlobalStyle/>
      <Body/>
      </PokeProvider>      
      </>        

  );
}
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    word-wrap: break-word;
  overflow-wrap:break-word ;
}  
  a{
    text-decoration: none;
    color: black;
    text-align: center;
}
ul li{
   list-style: none;
}
`
export default App;