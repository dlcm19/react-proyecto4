import React, { useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const empty = {
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    birthday:'',

}

const UsersForm = ({allUsers,updateData,setUpdateData}) => {
useEffect(() => {
    if (updateData) {
     reset(updateData)
    }
},[updateData ])
   
const createMovie = data => {
 const URL = 'https://users-crud1.herokuapp.com/users/'
 axios.post(URL, data)
  .then(res => {
//    console.log(res.data);
   allUsers()
 })
   .catch(err => console.log(err))
}


const buttonForm = data => {
  if(updateData){
    const URL = `https://users-crud1.herokuapp.com/users/${updateData.id}/`
    axios.put(URL, data)
    .then( res => {
            //  console.log(res.data);
    allUsers()
 })
    .catch(err => console.log(err))
    setUpdateData()
    } else {
    createMovie(data)     
        }
        reset(empty)
 }
    const { register, reset, handleSubmit } = useForm()
    return (
        <form  className='card__form' onSubmit={handleSubmit(buttonForm)} >
            <h2 className='card__titleForm'>{updateData ? 'Update users information': 'Create new user'}</h2>
            <label className='label__form' htmlFor="name">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                </div>
            </label>
            <input className='form__inupt' {...register('first_name')} type="text" id='name' placeholder='Enter Your Name' />

            <label  className='label__form' htmlFor="last_name">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
            </label>
            <input className='form__inupt' {...register('last_name')} type="text" id="last_name"  placeholder='Enter Your Last Name'/>

            <label  className='label__form' htmlFor="email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                  </svg>
            </label>
            <input className='form__inupt'  {...register('email')} type="email" id="email"  placeholder='Enter Your Email'/>
                    <label  className='label__form' htmlFor="pass">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
            </label>
            <input className='form__inupt'  {...register('password')} type="password" id='pass' placeholder='Enter Your Password'/>

            <label  className='label__form' htmlFor="birthday">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift-fill" viewBox="0 0 16 16">
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"/>
                </svg>
            </label>
            <input className='form__inupt'  {...register("birthday")} type="date"  id="birthday" />
            <button className='button__form'>{updateData ? 'Update': 'Create'}</button>
        </form>

    )
}

export default UsersForm
