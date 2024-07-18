"use client"
import React, { useState } from 'react';
import Upload from '../component/Upload';
import AudioList from '../component/AudioList';
import MainLayout from '../component/MainLayout';

const Page = () => {
  const [audioFiles, setAudioFiles] = useState<File[]>([]);

  const handleUpload = (files: File[]) => {
    setAudioFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <MainLayout>
      <div className='flex center items-center justify-center mt-10 mb-5'>
        <div className='text-[30px] font-semi-bold text-purple-heavy'>나의 오디오</div>
      </div>
      <div className='flex center items-center justify-center'>
        <Upload onUpload={handleUpload} />
      </div>
      <AudioList audioFiles={audioFiles} />
    </MainLayout>
  );
};

export default Page;
