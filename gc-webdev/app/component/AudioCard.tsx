import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import TranscriptPopup from './TranscriptPopup';

interface AudioCardProps {
  fileDisplayName: string;
  fileStorageName: string;
  audioTranscript: string;
  onSaveTranscript: (fileStorageName: string, newTranscript: string) => void;
}

const AudioCard: React.FC<AudioCardProps> = ({ fileDisplayName, fileStorageName, audioTranscript, onSaveTranscript }) => {
  const [progress, setProgress] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  const handleSaveTranscript = (newTranscript: string) => {
    onSaveTranscript(fileStorageName, newTranscript);
  }

  console.log(fileDisplayName); // Add this inside AudioCard component to see the file object

  const handleClick = () => {
    // Navigate to DictationPage with fileStorageName as a query parameter
    router.push(`/dictation?fileStorageName=${encodeURIComponent(fileStorageName)}&cardType=audio&manualTranscript=${encodeURIComponent(audioTranscript)}`);
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
    <div className='flex center items-center justify-center mb-2 cursor-pointer'>
      <div className='flex flex-col w-relative h-relative bg-white border-[1.5px] border-purple-light rounded-[10px]'>
        <div onClick={handleClick} className='text-[25px] font-bold ml-[30.5px] mt-[28px]'>{fileDisplayName}</div>
        <div className='w-[1032px] mt-[20px] ml-[30.5px]'>
          <div className='relative h-4 rounded-full bg-gray-30'>
            <div className='absolute top-0 left-0 h-4 rounded-full bg-purple-heavy' style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className='text-[20px] font-semi-bold ml-[30.5px] mt-[10px] text-gray-30'>
          {progress < 100 ? 'Uploading...' : 'Upload Complete'}
        </div>

        {/* <div className='ml-[30.5px] mt-[20px] mb-[20px] text-[18px] text-gray-600'>
          <strong> Transcript: </strong> {audioTranscript ? audioTranscript : "Transcript not available"}
        </div> */}

        <div className="ml-[30.5px] mt-[10px]">
          <button className="text-blue-500 underline" onClick={handleOpenPopup}>
            {audioTranscript ? 'Edit Transcript' : 'Add Transcript'}
          </button>
        </div>

        {isPopupOpen && (
          <TranscriptPopup
            fileStorageName={fileStorageName}
            currentTranscript={audioTranscript}
            onClose={handleClosePopup}
            onSave={handleSaveTranscript}
          />
        )}
      </div>
    </div>

    // <div className="flex center items-center justify-center mb-2 cursor-pointer">
    //   <div className="flex center items-center justify-center mb-2 cursor-pointer">
    //     <div className="flex flex-col w-relative h-relative bg-white border-[1.5px] border-purple-light rounded-[10px]">
    //       <div className="text-[25px] font-bold ml-[30.5px] mt-[28px]">{fileDisplayName}</div>
    //       <div className="ml-[30.5px] mt-[10px]">
    //         <button className="text-blue-500 underline" onClick={handleOpenPopup}>
    //           {audioTranscript ? 'Edit Transcript' : 'Add Transcript'}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

      
    // </div>
  );
};

export default AudioCard;