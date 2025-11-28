import React,{ useState } from 'react'
import UsersList from './UsersList'

const RegistrationForm = () => {
  const[ formData,setFormData ] = useState({
    username:"",
    password:"",
    email:""
  })
  const [users,setUsers] = useState([])
 const handleChange = (event) => {
  const {name,value} = event.target;
  setFormData((prevData) =>({
    ...prevData,
    [name]:value
  }))
 const handleSubmit = (event) => {
 event.preventDefault();
 console.log(formData)
 if(!formData.username || !formData.password || !formData.email){
  alert("All fiedls are required")
  return;
 }
}
    return (
    <div>
        
      <form>
        <div>
            <label htmlFor='username'>UserName: </label>
            <input 
                type='text' 
                id="username"
                name='username'
                placeholder='Enter your name'
            />
        </div>
        <div>
            <label htmlFor='password'>Password: </label>
            <input 
                type="password"
                id='password'
                name="password"
                placeholder='Enter the password'

            />
        </div>
        <div>
            <label htmlFor='email'>Email: </label>
            <input 
                type='email' 
                id="email"
                name="email"
                placeholder='Enter the mail'
            />
        </div>
        <div>
            <button type="submit">register</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
