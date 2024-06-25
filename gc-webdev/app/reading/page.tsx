import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Link from 'next/link'

const ReadingPage = () => {
  return (
    <>
      <div className='flex flex-col p-20 h-screen'>
        <div className='flex flex-row w-full py-3'>
          <div className='flex h-full w-full center items-center '>
            <button className='flex w-[170px] h-[50px] p-2 center items-center justify-center rounded-lg bg-purple-middle text-white'><p>제출하기</p> {/*submit*/}</button>
          </div>
          <div className='flex flex-col w-[45%] h-full mr-0'>
            <div className='flex flex-row py-3 px-5 center items-center justify-center' style={{ 
              borderRadius: '10px', 
              border: '1px solid rgba(0, 0, 0, 0.2)', 
              backgroundColor: 'rgba(255, 255, 255, 0.5)' 
            }}>
              <p>횟수 check</p>
              <input type='checkbox' className='ml-10' />
              <input type='checkbox' className='ml-10' />
              <input type='checkbox' className='ml-10' />
              <input type='checkbox' className='ml-10' />
              <input type='checkbox' className='ml-10' />
            </div>
          </div>
        </div>
        <Dictation_textbox />
        
      </div>
    </>
  )
}

ReadingPage.getLayout = function getLayout(page: React.ReactNode) {
  return page;
};

export default ReadingPage