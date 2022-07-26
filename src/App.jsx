import { Fragment, useState } from 'react'
import './App.css'
import Header from './header'
// import Sidebar from './sidebar'
import Sec from './sec'
// import  Recommended  from './recommended'
import { BrowserRouter  , Routes , Route } from 'react-router-dom';
// import SearchPage from './searchPage';
import Both from './both'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header /> 
        <Routes>
          <Route path='/search/:searchTerm' element={<Sec />} >

           </Route>


          {/* < Route path="/" element={<><Recommended/><Sidebar/></>}/> */}
         <Route path='/' element={<Both />}>

         </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
export default App
