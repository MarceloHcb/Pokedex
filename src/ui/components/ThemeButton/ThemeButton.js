import { useContext } from 'react'
import { PokeContext } from '../../../data/services/hooks/contexts/PokeContext'
import { themes } from '../../../data/themes/themes'
import "./ThemeButton.css"
export const ThemeButton = () => {
  const { theme, setTheme } = useContext(PokeContext)
  return (
    <>      
      <label onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} htmlFor=''>
      <div className='toggle' style={{background:theme.background3}} >
      <div className='toggle-circle' style={{transform:theme.translate }}></div>        
      </div>
      </label>

    </>)
}