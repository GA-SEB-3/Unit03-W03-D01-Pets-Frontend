import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { getOne, updatePet } from '../services/petService'

function UpdatePet() {
    const [formData,setFormData] = useState({
            name:"",
            age:0,
            breed:""
        })

    const {id} = useParams()
    const navigate = useNavigate()

    async function getPetInfo(){
        const foundPet = await getOne(id)
        setFormData(foundPet)
    }

    useEffect(()=>{getPetInfo()},[])

    function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
    }


    
    async function handleSubmit(e){
        e.preventDefault()
        console.log(formData)

        await updatePet(id,formData)
        navigate("/pets")
        setFormData({
            name:"",
            age:0,
            breed:""
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input
         type="text"
         id='name'
         name='name'
         value={formData.name}
         onChange={handleChange}
          />

        <label htmlFor="age">Age:</label>
        <input type="number"
                id='age'
                name='age' 
                value={formData.age}
                onChange={handleChange}
                min={0}


                 />

        <label htmlFor="breed">Breed</label>
        <input type="text"
        name='breed'
        id='breed'
        value={formData.breed}
        onChange={handleChange}


         />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UpdatePet
