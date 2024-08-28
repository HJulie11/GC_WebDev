import React, { useState } from 'react'

interface TranscriptPopupProps {
    fileStorageName: string;
    currentTranscript?: string;
    onClose: () => void
    onSave: (newTranscript: string) => void
}

const TranscriptPopup: React.FC<TranscriptPopupProps> = ({ fileStorageName, currentTranscript, onClose, onSave }) => {
    const [transcript, setTranscript] = useState<string>(currentTranscript || '');

    const handleSave = () => {
        onSave(transcript);
        onClose();
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-md shadow-md w-[60%] h-[60%]">
            <h2 className="text-xl font-semibold mb-4 text-purple-heavy">Edit Transcript</h2>
            <textarea
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Enter new transcript"
                className="w-full h-[90%] p-2 border border-gray-300 rounded"
            />
            <div className="flex justify-end mt-4">
            <button className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
                Cancel
            </button>
            <button className="px-4 py-2 bg-purple-heavy text-white rounded" onClick={handleSave}>
                Save Transcript
            </button>
            </div>
        </div>
        </div>
    )
}

export default TranscriptPopup