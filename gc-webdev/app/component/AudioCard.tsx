import React from 'react'

const AudioCard = () => {
  return (
    <>
    <div className='flex center items-center justify-center mb-2'>
        <div className='flex flex-col w-[1093px] h-[181px] bg-white border-[1.5px] border-purple-light rounded-[10px]'>
            <div className='text-[25px] font-bold ml-[30.5px] mt-[28px]'>Audio Title</div>
            <div className='w-[1032px] h-[10px] rounded-full bg-gray-30 mt-[20px] ml-[30.5px]'></div>
            <div className='text-[20px] font-semi-bold ml-[30.5px] mt-[10px] text-gray-30'>시작 안 함</div>
        </div>
    </div>
    </>
  )
}

export default AudioCard