import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Logout = ({regLog}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    regLog(null);
    navigate("/");
  },[]);
  return (
    <div>
      Login
    </div>
  )
};
export default Logout