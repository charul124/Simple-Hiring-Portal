import React from 'react'
import { useNavigate } from "react-router-dom";



function Navbar() {

  const navigate = useNavigate();
  const handleJobClick = () => {
    navigate("/joblistingcreation");
  };
  const handlemainClick = () => {
    navigate("/");
  };

  return (
    <div className='h-20 flex items-center w-full text-white'>
      <button onClick={handlemainClick}><div className='text-3xl pl-20 font-bold'>Joboard.</div></button>
      <div className='flex flex-row-reverse gap-4 mx-[68%] mt-3 items-center'>
      <button className='border border-1-black rounded-md hover:text-violet-950 hover:font-extrabold hover:bg-slate-50 ' onClick={handleJobClick}><div className='text-l font-semibold p-2 w-56'>Want to List your job ?</div></button>
      
      </div>
    </div>
  )
}

export default Navbar
