import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {setUrl} from "../store/urlSlice"

const form = () => {

    const [instaUrl, setInstaUrl] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearchBtn = () => {
      dispatch(setUrl(instaUrl));
      navigate(`/download`);
    }

  return (
        <div className='absolute top-1/2 left-1/2 md:left-10 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-black rounded-lg p-4 md:p-8 max-w-[450px] w-[99%] bg-opacity-55'>
            <input className='w-full px-2 md:px-4 py-2 text-lg rounded-lg mb-4' type="text" placeholder='Enter Your URL' onChange={(e) => setInstaUrl(e.target.value)} />
            <button className='w-full  px-2 md:px-4 py-2 text-lg bg-blue-500 rounded-lg text-white' onClick={handleSearchBtn}>Search</button>
        </div>
  )
}

export default form