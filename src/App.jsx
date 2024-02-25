import { createContext, useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Couple from './pages/Couple'
import Opening from './pages/Opening/Opening'
import Stories from './pages/Stories'
import Content1 from './pages/Stories/Content1'
import Content2 from './pages/Stories/Content2'
import Content3 from './pages/Stories/Content3'

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
  useEffect(() => {
    setTimeout(() => {
      if (stories.satu) {
        setStories(prevState => ({ ...prevState, satu: false, dua: true }));
        setSeen(prevState => ({ ...prevState, dua: true }));
      } else if (stories.dua) {
        setStories(prevState => ({ ...prevState, dua: false, tiga: true }));
        setSeen(prevState => ({ ...prevState, tiga: true }));
      } else if (stories.tiga) {
        setStories(prevState => ({ ...prevState, tiga: false }));
      }
    }, 4000); // Transition after 6 seconds
    
  }, [stories]);
  return (
      <MyContext.Provider value={{stories, setStories, seen, setSeen}}>
            <Opening />
            <Couple />
            <Stories />
            {stories.satu ? <Content1 /> : null}
          {stories.dua ? <Content2 /> : null}
          {stories.tiga ? <Content3 /> : null}
            <Navbar />        
      </MyContext.Provider>
  )
}

export default App
