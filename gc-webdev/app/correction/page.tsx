import React from 'react';
import Dictation_textbox from '../component/Dictation_textbox';
import Link from 'next/link';
import Button from '../component/Button';

const CorrectionPage = () => {
  return (
    <div className='flex flex-row mt-6 p-10 min-h-screen space-x-5'>
      <div className='flex-1 flex flex-col'>
        <Dictation_textbox />
      </div>
      <div className='flex-1 flex flex-col'>
        <Dictation_textbox />
        <div className='mt-2'>
          <Button type='button' title={<Link href="/correction">제출하기</Link>} variant='bg-gray-30' full={false} />
        </div>
      </div>
    </div>
  );
}

CorrectionPage.getLayout = function getLayout(page: React.ReactNode) {
  return page;
};

export default CorrectionPage;
