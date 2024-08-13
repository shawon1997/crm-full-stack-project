import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='d-flex justify-content-between pointer mt-2' style={{color:"white",backgroundColor:"#20203e",borderRadius:"6px",height:"45px",width:"100%",padding:"10px"}}>
      <div className='pointer' onClick={()=>navigate("/")}>Company</div>
      <div className='pointer' onClick={()=>navigate("/list-admins")}>Admin</div>
      <div className='pointer' onClick={()=>navigate("/list-employes")}>Employee Management</div>
      <div className='pointer' onClick={()=>navigate("/list-visits")}>Visit</div>
    </div>
  )
}

export default Navbar
