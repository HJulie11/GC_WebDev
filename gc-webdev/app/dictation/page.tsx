import React from 'react'
import Dictation_textbox from '../component/Dictation_textbox'

const DictationPage = () => {
  return (
    <>
        <div className='flex flex-row p-40 h-[1000px]'>
            <Dictation_textbox />
            <div className='w-[40%] h-full ml-5'>
                
            </div>
        </div>
    </>
  )
}

DictationPage.getLayout = function getLayout(page: React.ReactNode) {
    return page;
};

export default DictationPage