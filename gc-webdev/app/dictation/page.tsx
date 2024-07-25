"use client";

import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Card from '../component/NewsCard'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const DictationPage = () => {

  const searchParams = useSearchParams();
  const title = searchParams.get('title') ?? 'Default';
  const url = searchParams.get('url') ?? 'Default';
  const thumbnail = searchParams.get('thumbnail') ?? 'Default';


  return (
    <>
        <div className='flex flex-row p-20 h-screen'>
            <Dictation_textbox />
            <div className='flex flex-col w-[40%] h-full px-5 center items-center justify-center'>
              <Card title={title} url={url} thumbnail={thumbnail} />
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