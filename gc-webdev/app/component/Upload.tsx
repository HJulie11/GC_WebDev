import React from 'react'
import Image from 'next/image'
import dragDrop from '@/public/drag and drop.svg'

// TODO: make props interface to get different progress bars
// progress bar dynamical changes:
// 1. Not started
// 2. In progress (at least dictation submitted, but read out loud not submitted yet)
// 3. Completed (read out loud submitted)

const Upload = () => {
  return (
    <div className='flex flex-col center justify-center items-center'>
        <div className='flex flex-col center items-center justify-center border-dashed border-2 border-purple-heavy bg-purple-light bg-opacity-[0.8] lg:w-[1093px] lg:h-[136px] w-[relative] h-[relative] rounded-[10px] mt-10 mb-5'>
            <Image src={dragDrop} alt='dragDrop'/> 
            <p className='text-[23px] font-light mt-[10px]'>🎧 원하는 음원 업로드하기</p>
        </div>
    </div>
  )
}

export default Upload