import React, { useState } from 'react'

const App = () => {

  const[formData,setFormData]=useState({
    fullName:'',
    email:'',
    password:''
  })

  console.log(formData);
  

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })

  }

  return (
    <div>
      <form action="">
<input placeholder='Fullname' name='fullName' onChange={handleChange}/>
<input placeholder='Email' name='email' onChange={handleChange}/>
<input placeholder='Password' name='password' onChange={handleChange}/>
<button type='submit'>Submit</button>


      </form>
    </div>
  )
}

export default App