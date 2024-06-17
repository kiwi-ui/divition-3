import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Couple from './pages/Couple'
import Opening from './pages/Opening/Opening'
import MainEvent from './pages/MainEvents/MainEvent'

export const MyContext = createContext();

function App() {
  const [stories, setStories] = useState({
    satu: false,
    dua: false,
    tiga: false,
    empat: false,
    lima: false
  });
  const [seen, setSeen] = useState({
    satu: false,
    dua: false,
    tiga: false,
    empat: false,
    lima: false,
  })

  return (
      <MyContext.Provider value={{ stories, setStories, seen, setSeen }}>
        <Opening />
        <Couple />
        <MainEvent />
        <Navbar />        
      </MyContext.Provider>
  )
}

export default App
