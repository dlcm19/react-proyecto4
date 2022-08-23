import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import axios from 'axios'
import UsersForm from './components/UsersForm'

function App() {
const [useAll, setUseAll] = useState()
const [updateData, setUpdateData] = useState()
const allUsers = () => {
  const URL = 'https://users-crud1.herokuapp.com/users/'
  axios.get(URL)
  .then(res => setUseAll(res.data))
  .catch(err => console.log(err))
}
  useEffect(() => {
    allUsers()
  },[])
  return (
    
    <article className="App">
      <UsersForm 
      allUsers={allUsers}
      updateData={updateData}
      setUpdateData={setUpdateData}
      />
         <div className='card' >
        {
          useAll?.map(user => (
            <UsersList 
              key={user.id}
              user={user}
              allUsers={allUsers}
              setUpdateData={setUpdateData}
            />
          ))
        }
       </div>     
       
    </article>
  )
}

export default App
