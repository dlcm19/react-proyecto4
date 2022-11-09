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

const UsersForm = ({allUsers,updateData,setUpdateData ,handleCloseForm}) => {
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

         handleCloseForm() // dicha función al crear el usuario el modal se oculta de una vez.  
 }
    const { register, reset, handleSubmit } = useForm()
    return (
        <form  className='card__form' onSubmit={handleSubmit(buttonForm)} >
             <div  onClick={handleCloseForm} className='form-x'>X</div>
            <h2 className='card__titleForm'>{updateData ? 'Update users information': 'Create new user'}</h2>
            <label className='label__form' htmlFor="name">
              <div>
              <i class="fa-solid fa-user-tie"></i>
                </div>
            </label>
            <input className='form__inupt' {...register('first_name')} type="text" id='name' placeholder='Enter Your Name' />

            <label  className='label__form' htmlFor="last_name">
            <i class="fa-solid fa-user-tie"></i>
            </label>
            <input className='form__inupt' {...register('last_name')} type="text" id="last_name"  placeholder='Enter Your Last Name'/>
            
            <label  className='label__form' htmlFor="email">
            <i class="fa-solid fa-envelope"></i>
            </label>
            <input className='form__inupt'  {...register('email')} type="email" id="email"  placeholder='Enter Your Email'/>
                    <label  className='label__form' htmlFor="pass">
                    <i class="fa-sharp fa-solid fa-lock"></i>
            </label>
            <input className='form__inupt'  {...register('password')} type="password" id='pass' placeholder='Enter Your Password'/>

            <label  className='label__form' htmlFor="birthday">
            <i class="fa-solid fa-cake-candles"></i>
            </label>
            <input className='form__inupt'  {...register("birthday")} type="date"  id="birthday" />
            <button className='button__form'>{updateData ? 'Update': 'Create'}</button>
        </form>

    )
}

export default UsersForm
