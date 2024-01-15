import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { getPostData } from '../utils/getPostData';
import { setUrl } from '../store/urlSlice';
import LoadingSkeleton from '../Loader/LoadingSkeleton';

const Downloader = () => {

  const url  = useSelector((state) => state.url.url);
  const [data, setData] = useState([]);
  const [instaUrl,setInstaUrl] = useState(url);
  const [loading, setLoading] = useState(true);
  const [videoId, setVideoId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
      const urlArr = instaUrl.split("/");
      setVideoId(urlArr[4]);
  }, [instaUrl])

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      if(!videoId) return
      let data = await getPostData(videoId);
      setData(data)
      
      setLoading(false);
    }
    return () => getData();
  }, [])

  const search = async () => {
    setLoading(true);
    dispatch(setUrl(instaUrl));
    if(!videoId) return
    let data = await getPostData(videoId);
    setData(data);
    setLoading(false)
  }

  return (
    <div className='p-4 bg-gray-300'>
      <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
        <input 
          type="text" 
          placeholder='Enter your URL' 
          className='flex-1 py-2 px-4 md:px-8 text-xl md:text-3xl bg-white focus:outline-none' 
          value={instaUrl}
          onChange={(e) => setInstaUrl(e.target.value)}
        />
        <button className='p-2 md:p-4 bg-blue-500 text-lg md:text-xl text-white' onClick={search}>🔍 <span className='hidden md:inline'>Search</span></button>
      </div>

      {/* video content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg p-4 md:p-8 bg-white h-max-[80%]'>
        {
          loading ? 
          <LoadingSkeleton /> :
          <>
          <div className='flex justify-center'>
            <img className='w-[450px] rounded-lg' src={data[0]?.thumb} alt="" />
          </div>
          <div className='flex items-center p-2'>
              <div className='w-full'>
                <h2 className='text-lg md:text-xl font-bold mb-4 truncate text-ellipsis'>{data[0]?.title}</h2>
                <div className='w-full flex justify-center'>
                  <button 
                    className='px-20 py-4 bg-blue-500 text-lg md:text-xl text-white rounded-lg block'
                    onClick={() => {window.open(data[0]?.url)}}
                  >Download</button>
                </div>
              </div>
          </div>
          </>
        }
      </div>
    </div>
  )
}

export default Downloader