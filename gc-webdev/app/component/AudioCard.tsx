import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

interface AudioCardProps {
  fileDisplayName: string;
  fileStorageName: string;
}

const AudioCard: React.FC<AudioCardProps> = ({ fileDisplayName, fileStorageName }) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  console.log(fileDisplayName); // Add this inside AudioCard component to see the file object

  const handleClick = () => {
    // Navigate to DictationPage with fileStorageName as a query parameter
    router.push(`/dictation?fileStorageName=${encodeURIComponent(fileStorageName)}`);
  };


  useEffect(() => {
    const fakeUpload = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fakeUpload);
          return 100;
        }
        return prev + 10;
      });
    }, 500); // Simulate upload progress every 500ms

    return () => clearInterval(fakeUpload);
  }, []);

  return (
    <div onClick={handleClick} className='flex center items-center justify-center mb-2 cursor-pointer'>
      <div className='flex flex-col w-[1093px] h-[181px] bg-white border-[1.5px] border-purple-light rounded-[10px]'>
        <div className='text-[25px] font-bold ml-[30.5px] mt-[28px]'>{fileDisplayName}</div>
        <div className='w-[1032px] mt-[20px] ml-[30.5px]'>
          <div className='relative h-4 rounded-full bg-gray-30'>
            <div className='absolute top-0 left-0 h-4 rounded-full bg-purple-heavy' style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className='text-[20px] font-semi-bold ml-[30.5px] mt-[10px] text-gray-30'>
          {progress < 100 ? 'Uploading...' : 'Upload Complete'}
        </div>
      </div>
    </div>
  );
};

export default AudioCard;