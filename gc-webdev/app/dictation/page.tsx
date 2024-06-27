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