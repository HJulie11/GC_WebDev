import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Link from 'next/link'

const DictationPage = () => {
  return (
    <>
      <div className='flex flex-col p-20 h-[1000px]'>
        <Link href="/reading">
          <button
            style={{
              width: '170px',
              height: '50px',
              padding: '12px 39px 13px 40px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              background: '#8E8E8E',
              alignSelf: 'flex-start',
              marginBottom: '20px'
            }}
          >
            제출하기
          </button>
        </Link>

        <div className='flex flex-row h-[1000px]'>
          <Dictation_textbox />
          <div className='flex flex-col w-[25%] h-full ml-5'>
            <div className='flex flex-row pt-1 pl-8 pr-1 pb-1' style={{ 
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
      </div>
    </>
  )
}

DictationPage.getLayout = function getLayout(page: React.ReactNode) {
  return page;
};

export default DictationPage
