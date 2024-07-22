import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Cover from './pages/Cover/index.jsx'
import Loading from './pages/Loading/index.jsx'
import { Suspense, lazy } from 'react'

const Cover = lazy(() => import('./pages/Cover'))
const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
          <Route path='/:name' element={ <Cover /> }/>
          <Route path='/:name/main' element={ <App /> }/>
      </Routes>
    </BrowserRouter>
  </Suspense>
)
