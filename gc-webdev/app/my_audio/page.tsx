import React from 'react'
import Upload from '../component/Upload'
import AudioList from '../component/AudioList'
import MainLayout from '../component/MainLayout'


const page = () => {
  return (
    <MainLayout>
      <div className='flex center items-center justify-center mt-10 mb-5'>
        <div className='text-[30px] font-semi-bold text-purple-heavy'>나의 오디오</div>
      </div>
      <Upload />
      <AudioList />
    </MainLayout>
  )
}

export default page