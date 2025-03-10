import './App.css'
import {Routes, Route} from 'react-router'
import AllPets from './pages/AllPets'
import PetDetails from './pages/PetDetails'
import CreatePet from './pages/CreatePet'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import UpdatePet from './pages/UpdatePet'

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/pets" element = {<AllPets/>}/>
      <Route path="/pets/:id" element={<PetDetails/>}/>
      <Route path="/pets/create" element={<CreatePet/>}/>
      <Route path="/pets/:id/update" element = {<UpdatePet/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App
