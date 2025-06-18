import Homepage from './pages/Homepage';
import Createpage from './pages/Createpage';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import './App.css'
function App(){
  return (
    <>
      <Navbar/>
      <div className='p-10'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/create' element={<Createpage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;