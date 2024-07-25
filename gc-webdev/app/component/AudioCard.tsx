import React from 'react';

interface AudioCardProps {
  file: File;
}

const AudioCard: React.FC<AudioCardProps> = ({ file }) => {
  return (
    <div className='flex center items-center justify-center mb-2'>
      <div className='flex flex-col w-[1093px] h-[181px] bg-white border-[1.5px] border-purple-light rounded-[10px]'>
        <div className='text-[25px] font-bold ml-[30.5px] mt-[28px]'>{file.name}</div>
        <audio controls className='w-[1032px] mt-[20px] ml-[30.5px]'>
          <source src={URL.createObjectURL(file)} type={file.type} />
        </audio>
        <div className='text-[20px] font-semi-bold ml-[30.5px] mt-[10px] text-gray-30'>시작 안 함</div>
      </div>
    </div>
  );
};

export default AudioCard;
