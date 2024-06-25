import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Card from '../component/NewsCard'
import Link from 'next/link'

const DictationPage = () => {
  return (
    <>
        <div className='flex flex-row p-20 h-screen'>
            <Dictation_textbox />
            <div className='flex flex-col w-[40%] h-full px-5 center items-center justify-center'>
              <Card title='dummytitle' url="/dictation" thumbnail='dummyurl' />
              {/* <Link href="/correction">
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
                }} className='mt-60 ml-20'>제출하기</button>
              </Link> */}
              <a href="/correction" className='flex mt-10 w-[170px] h-[50px] p-2 center items-center justify-center rounded-lg bg-purple-middle text-white'><p>제출하기</p> {/*submit*/}</a>
            </div>
        </div>
    </>
  )
}

DictationPage.getLayout = function getLayout(page: React.ReactNode) {
    return page;
};

export default DictationPage