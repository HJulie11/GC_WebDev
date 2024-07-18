import React from 'react';
import Search from '@/public/search.svg';
import Image from 'next/image';
import AudioCard from './AudioCard';

interface AudioListProps {
  audioFiles: File[];
}

const AudioList: React.FC<AudioListProps> = ({ audioFiles }) => {
  return (
    <div className='flex flex-col center items-center justify-center'>
      <div className='flex flex-col center justify-center lg:w-[1093px] w-[relative]'>
        <div className='ml-0 mb-5 w-[46px] h-[46px] rounded-full bg-gray-30 flex center items-center justify-center '>
          <Image src={Search} alt='search' />
        </div>
      </div>
      <div className='flex flex-col center items-center lg:w-[1093px] w-[relative]'>
        {audioFiles.map((file, index) => (
          <AudioCard key={index} file={file} />
        ))}
      </div>
    </div>
  );
};

export default AudioList;
