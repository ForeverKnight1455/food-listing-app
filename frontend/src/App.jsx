import { Box } from '@chakra-ui/react';
import Homepage from './pages/Homepage';
import Createpage from './pages/Createpage';
import Productpage from './pages/Productpage';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
function App(){
  return(
   <>
      <Box>
        <Navbar/>
        <Routes>
          <Route path = '/' element={<Homepage/>} />
          <Route path = '/create' element={<Createpage/>} />
          <Route path = '/view' element = {<Productpage/>} />
        </Routes>
      </Box>
   </>
  );
}

export default App;