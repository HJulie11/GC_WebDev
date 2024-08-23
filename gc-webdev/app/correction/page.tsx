"use client";

import React, { useEffect, useState } from 'react';
import Dictation_textbox from '../component/Dictation_textbox';
import Link from 'next/link';
import { YoutubeTranscript } from 'youtube-transcript';
import { useSearchParams } from 'next/navigation';

const CorrectionPage = () => {
  const searchParams = useSearchParams();
  const url = searchParams.get('url') ?? '';
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const getTranscript = async () => {
      if (url) {
        try {
          const transcriptArray = await YoutubeTranscript.fetchTranscript(url);
          const transcriptText = transcriptArray.map(item => item.text).join(' ');
          setTranscript(transcriptText);
        } catch (error) {
          console.error('Error fetching transcript:', error);
          setTranscript('Transcript could not be retrieved.');
        }
      }
    };

    getTranscript();
  }, [url]);

  return (
    <>
      <div className='flex flex-row p-20 h-screen'>
        <div className='flex w-[50%] h-full center items-center justify-center'>
          <Dictation_textbox />
        </div>
        <div className='flex flex-col w-[50%] h-full px-5 center items-center justify-center'>
          <div className='p-[5px] flex h-[80%] w-full center items-center justify-center'>
            <Dictation_textbox value={transcript} />
          </div>
          <div className='flex h-[20%] w-full center items-center justify-center'>
            <a href="/reading" className='flex w-[170px] h-[50px] p-2 center items-center justify-center rounded-lg bg-purple-middle text-white'>
              <p>제출하기</p> {/*submit*/}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

CorrectionPage.getLayout = function getLayout(page: React.ReactNode) {
  return page;
};

export default CorrectionPage;
