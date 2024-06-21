import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Link from 'next/link'

const DictationPage = () => {
  return (
    <>
        <div className='flex flex-row p-40 h-[1000px]'>
            <Dictation_textbox />
            <div className='flex flex-col w-[40%] h-full ml-5'>
            <Dictation_textbox />
            <Link href="/reading">
              <button style={{
                display: 'flex',
                width: '170px',
                height: '50px',
                padding: '12px 39px 13px 40px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                borderRadius: '10px',
                background: '#8E8E8E'
              }} className='mt-40 ml-20'>제출하기</button>
            </Link>
            </div>
        </div>
    </>
  )
}

DictationPage.getLayout = function getLayout(page: React.ReactNode) {
    return page;
};

export default DictationPage
