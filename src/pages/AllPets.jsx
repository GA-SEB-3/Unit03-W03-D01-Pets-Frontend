import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { getAll } from '../services/petService'
/* 
Steps:
        1. In the useEffect make the axios call to get the pets
        2. Store the response into a state
        3. .map() through the state to show all the pets
*/
function AllPets() {
    const [pets,setPets] = useState([])

    async function getAllPets(){
        try{
            const fetchedPets = await getAll()
            console.log(fetchedPets)
            setPets(fetchedPets)    
        }
        catch(error){
            console.log(error)
        }
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
        <button><Link to={`/pets/${onePet._id}/update`}>Update Pet information</Link></button>

      </div>
    )}
    </div>
  )
}

export default AllPets
