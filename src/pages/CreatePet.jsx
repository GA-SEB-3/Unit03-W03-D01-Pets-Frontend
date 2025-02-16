import React from 'react'

function CreatePet() {

    function handleSubmit(e){
        e.preventDefault()
    }
  return (
    <div>
      <h1>Create New Pet</h1>

      <form onSubmit={handleSubmit}>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreatePet
