import React from 'react'
import { useState } from 'react'
import Loginform from './Loginform';
import Pagenav from './Pagenav';
import Banner from './Banner'

const Loginpage = () => {

  const adminUser={
    email:"senanadigozelov555@gmail.com",
    password:"senan123"
  }

  const [user, setUser]=useState({name:"",email:""});
  const [error, setError] = useState("");

  const Login= details => {

    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged in");

      setUser({
        name:details.name,
        email:details.email
      })
    }else{
      setError("Details do not match!!")
    }

  }

  const Logout = ()=>{
    setUser({name:"",email:""})

  }
  return (
   <>
   <Pagenav />
   <Banner title="Homepage → Login" title2="Login" />
     <div className='login' >
      {(user.email != "")?(
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout} >Logout</button>
        </div>
      ):(
        <Loginform Login={Login} error={error} />
      )}
    </div>
   </>
  
  )
}

export default Loginpage