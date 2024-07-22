import { createContext, useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Couple from './pages/Couple'
import Opening from './pages/Opening/Opening'
import MainEvent from './pages/MainEvents/MainEvent'
import Gallery from './pages/Gallery'
import Gift from './pages/Gift'
import Wish from './pages/Wish'
import Closing from './pages/Closing'
import Loading from './pages/Loading'

export const MyContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  function handleLoad() {
    setIsLoading(false);
  }
  useEffect(() => {

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);

    }
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return ( 
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
  )
}

export default App
