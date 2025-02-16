import {useState} from 'react'

function CreatePet() {
    const [formData,setFormData] = useState({
        name:"",
        age:0,
        breed:""
    })


    function handleSubmit(e){
        e.preventDefault()
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
    }
  return (
    <div>
      <h1>Create New Pet</h1>

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

export default CreatePet
