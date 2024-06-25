import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Link from 'next/link'

const CorrectionPage = () => {
  return (
    <>
        <div className='flex flex-row p-20 h-screen'>
            <div className='flex w-[50%] h-full center items-center justify-center'>
                <Dictation_textbox />
            </div>
            <div className='flex flex-col w-[50%] h-full px-5 center items-center justify-center'>
                <div className='p-[5px] flex h-[80%] w-full center items-center justfiy-center'>
                    <Dictation_textbox />
                </div>
                {/* <Link href="/reading">
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
                </Link> */}
                <div className='flex h-[20%] w-full center items-center justify-center'>
                    <a href="/reading" className='flex w-[170px] h-[50px] p-2 center items-center justify-center rounded-lg bg-purple-middle text-white'><p>제출하기</p> {/*submit*/}</a>
                </div>
            </div>
        </div>
    </>
  )
}

CorrectionPage.getLayout = function getLayout(page: React.ReactNode) {
    return page;
};

export default CorrectionPage