import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import dragDrop from '@/public/drag and drop.svg';
import LocalStorage from '@/constants/localstorage';
import axios from 'axios'
import { storeContext } from '../context/storeContext';

interface UploadProps {
  onUpload: (files: File[]) => void;
}

const Upload: React.FC<UploadProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const { url, token } = useContext(storeContext);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    onUpload(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      onUpload(files);
    }
  };

  // const handleUploadAudio = async (files: File[]) => {
  //   // const token = LocalStorage.getItem('token')
  //   const formData = new FormData();

  //   files.forEach(file => {
  //     formData.append('audioFile', file);
  //   });

  //   try {
  //     const response = await axios.post(`${url}/api/user/upload-audio`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     });

  //     console.log('Files uploaded successfully', response.data);
  //   } catch (error) {
  //     console.error('Error uploading files:', error);
  //   }
  // }

  return (
    <div
      className='flex flex-col center items-center justify-center border-dashed border-2 border-purple-heavy bg-purple-light bg-opacity-[0.8] w-[75%] h-[136px] rounded-[10px] mt-10 mb-5'
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type='file'
        accept='audio/*'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        multiple
      />
      <Image src={dragDrop} alt='dragDrop' />
      {/* <p className='text-[23px] font-light mt-[10px]'>🎧 원하는 음원 업로드하기</p> */}
      <button
        className='mt-3'
        onClick={() => fileInputRef.current?.click()}
      >
        <p className='text-[23px] font-light mt-[10px]'>🎧 원하는 음원 업로드하기</p>
      </button>
    </div>
  );
};

export default Upload;
