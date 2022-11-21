import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import axios from 'axios'
import UsersForm from './components/UsersForm'
import Swal from "sweetalert2";
import 'animate.css';


function App() {
const [useAll, setUseAll] = useState()
const [updateData, setUpdateData] = useState()
const [isFormOpen, setIsFormOpen] = useState(false)


const [mesajeDelete, setMesajeDelete] = useState(false)

const alertMessage = () => {
  Swal.fire({
    title: 'Welcome',
    text: 'A mi App de Usuario: Crea, Borra y Actualiza',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

useEffect(() =>{
  alertMessage()
},[])

const allUsers = () => {
  const URL = 'https://users-crud1.herokuapp.com/users/'
  axios.get(URL)
  .then(res => setUseAll(res.data))
  .catch(err => console.log(err))
}
  useEffect(() => {
    allUsers()
  },[])

  const handleOpenForm = () => setIsFormOpen(true)
  const handleCloseForm = () => setIsFormOpen(false)

  const handleMesajeDelete =() => setMesajeDelete(true)


  return (
    
    <article className="App">
      <button className='button-openForm' onClick={handleOpenForm }>Open Form</button>
      <div  className={isFormOpen ? 'form-container' : 'form-none'}>
      <UsersForm 
      allUsers={allUsers}
      updateData={updateData}
      setUpdateData={setUpdateData}
      handleCloseForm={handleCloseForm}
      handleOpenForm = {handleOpenForm}
      />
      </div>
         <div className='card' >
        {
          
          useAll?.map(user => (
            <UsersList 
              key={user.id}
              user={user}
              allUsers={allUsers}
              setUpdateData={setUpdateData}
              handleOpenForm = {handleOpenForm}
              handleMesajeDelete= {handleMesajeDelete}
              handleCloseForm={handleCloseForm}
            />
              
          ))
        }
       </div>   
      
       
    </article>
  )
}

export default App
