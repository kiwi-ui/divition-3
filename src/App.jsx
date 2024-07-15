import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Couple from './pages/Couple'
import Opening from './pages/Opening/Opening'
import MainEvent from './pages/MainEvents/MainEvent'
import Gallery from './pages/Gallery'
import Gift from './pages/Gift'
import Wish from './pages/Wish'
import Closing from './pages/Closing'
import Cover from './pages/Cover'

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
  const [hide, setHide] = useState(true)

  return (
      <MyContext.Provider value={{ stories, setStories, seen, setSeen }}>
        {/* {hide ?  */}
          {/* <Cover hide={hide} setHide={setHide}/> : */}

          <>
            <Opening />
            <Couple />
            <MainEvent />
            <Gallery />
            <Gift />
            <Wish />
            <Closing />
            <Navbar />
          </>
        {/* } */}
      </MyContext.Provider>
  )
}

export default App
