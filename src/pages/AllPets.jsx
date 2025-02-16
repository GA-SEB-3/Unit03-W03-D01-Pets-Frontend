import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router'
/* 
Steps:
        1. In the useEffect make the axios call to get the pets
        2. Store the response into a state
        3. .map() through the state to show all the pets
*/
function AllPets() {
    const [pets,setPets] = useState([])

    async function getAllPets(){
        const fetchedPets = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/pets`)
        console.log(fetchedPets.data)
        setPets(fetchedPets.data)
    }

    useEffect(()=>{
        getAllPets()
    },[])
  return (
    <div>

      <h1>All Pets</h1>

      {pets.map((onePet)=>
      <div key={onePet._id}>
        <h3>Name: {onePet.name}</h3>
        <button><Link to={`/pets/${onePet._id}`}>See Pet Details</Link></button>
      </div>
    )}
    </div>
  )
}

export default AllPets
