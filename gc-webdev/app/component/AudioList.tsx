import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AudioCard from './AudioCard';
import LocalStorage from '@/constants/localstorage';
import { storeContext } from '../context/storeContext';

interface AudioFile {
  fileDisplayName: string;
  fileStorageName: string;
  audioTranscript: string;
}

const AudioList: React.FC = () => {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const { token, url } = useContext(storeContext);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        // const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token is missing');
          return;
        }

        const response = await axios.get(`${url}/api/user/audio-files`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setAudioFiles(response.data.audioFiles);
      } catch (error) {
        console.error('Error fetching audio files:', error);
      }
    };

    fetchAudioFiles();
  }, [token]);

  const handleSaveTranscript = async (fileStorageName: string, newTranscript: string) => {
    // const token = LocalStorage.getItem('token');
    
    try {
      const response = await axios.post(`${url}/api/user/upload-transcript`, {
        fileStorageName,
        transcirpt: newTranscript,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log('Transcript updated successfully', response.data);
      setAudioFiles(prevFiles => prevFiles.map(file =>
        file.fileStorageName === fileStorageName ? { ...file, audioTranscript: newTranscript } : file
      ))
    } catch (error) {
      console.error('Error updating transcript:', error);
    }
  }

  if (!audioFiles || audioFiles.length === 0) {
    return <div>No audio files found</div>;
  }

  return (
    <div>
      {audioFiles.map((file, index) => (
        <AudioCard 
          key={index}
          fileDisplayName={file.fileDisplayName} 
          fileStorageName={file.fileStorageName} 
          audioTranscript={file.audioTranscript} 
          onSaveTranscript={handleSaveTranscript}/>
      ))}
    </div>
  );
};

export default AudioList;