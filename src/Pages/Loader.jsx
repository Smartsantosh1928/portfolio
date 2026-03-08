import React from 'react'
import Loader from "react-js-loader";

function Loading() {
  return (
    <div className='text-white'>
        <div className="flex justify-center items-center h-screen">
            <Loader type="bubble-ping" bgColor="#007AFF" size={100} />
        </div>
    </div>
  )
}

export default Loading