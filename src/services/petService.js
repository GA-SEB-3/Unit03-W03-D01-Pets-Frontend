import axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/pets`

async function getAll(){
    try{
        const res = await axios.get(BASE_URL)
        return res.data
    }
    catch(error){
        console.log(error)
    }
}

async function getOne(id){
    try{
        const res = await axios.get(`${BASE_URL}/${id}`)
        return res.data
    }
    catch(error){
        console.log(error)
    }
}

async function createPet(fromData){
    try{
        const res = await axios.post(`${BASE_URL}`,formData)
        return res.data
    }
    catch(error){
        console.log(error)
    }
}


async function deleteOnePet(id){
    try{
        const res = await axios.delete(`${BASE_URL}/${id}`)
        return res.data
    }
    catch(error){
        console.log(error)
    }
}

async function updatePet(id,formData){
    try{
        const res = await axios.put(`${BASE_URL}/${id}`,formData)
        return res.data
    }
    catch(error){
        console.log(error)
    }
}


export {getAll,getOne,updatePet,deleteOnePet,createPet}