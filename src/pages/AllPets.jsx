import {useEffect, useState} from 'react'
import axios from 'axios'
/* 
Steps:
        1. In the useEffect make the axios call to get the pets
        2. Store the response into a state
        3. .map() through the state to show all the pets
*/
function AllPets() {
    const [pets,setPets] = useState([])

    async function getAllPets(){
        const fetchedPets = await axios.get("http://localhost:3000/pets")
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
      <div>
        <h3>Name: {onePet.name}</h3>
      </div>
    )}
    </div>
  )
}

export default AllPets
