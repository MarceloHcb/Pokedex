import { createGlobalStyle } from 'styled-components';
import { Body } from './components/Body/Body';
import { ThemeProvider } from './components/AppContext/theme-context';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';

function App() {
  return (
    <>
      <ThemeProvider>
       
        <GlobalStyle />
        <Body />
      </ThemeProvider>

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
