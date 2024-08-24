"use client";

import React, { Suspense } from 'react'
import Dictation_textbox from '../component/Dictation_textbox'
import Card from '../component/NewsCard'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const safeArray = (data: any) => Array.isArray(data) ? data : [];

const DictationPageContent = () => {

  const searchParams = useSearchParams();
  const title = searchParams.get('title') ?? 'Default';
  const url = searchParams.get('url') ?? 'Default';
  const thumbnail = searchParams.get('thumbnail') ?? 'Default';
  const key = searchParams.get('key') ?? 'Default';

  const embedUrl = `https://www.youtube.com/embed/${key}`;

  return (
    <>
        <div className='flex flex-row p-20 h-screen'>
            <Dictation_textbox />
            <div className='flex flex-col w-[40%] h-full px-5 center items-center justify-center'>
              {/* Embed the video */}
              {(
                <iframe
                  width="300"
                  height="315"
                  src={embedUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              <a href="/correction" className='flex mt-10 w-[170px] h-[50px] p-2 center items-center justify-center rounded-lg bg-purple-middle text-white'><p>제출하기</p> {/*submit*/}</a>
            </div>
        </div>
    </>
  )
}

const DictationPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DictationPageContent />
    </Suspense>
  );
};

DictationPage.getLayout = function getLayout(page: React.ReactNode) {
    return page;
};

export default DictationPage