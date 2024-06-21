import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Card from '../component/NewsCard'
import Link from 'next/link'
import Button from '../component/Button'

const DictationPage = () => {
  return (
    <>
        <div className='flex flex-row p-40 h-[1000px]'>
            <Dictation_textbox />
            <div className='flex flex-col w-[40%] h-full ml-5'>
            <Card title='dummytitle' url="/dictation" thumbnail='dummyurl' />
              <Button type='button' title={<Link href="/correction">제출하기</Link>} variant='bg-gray-30' full={false} />
            </div>
        </div>
    </>
  )
}

DictationPage.getLayout = function getLayout(page: React.ReactNode) {
    return page;
};

export default DictationPage
