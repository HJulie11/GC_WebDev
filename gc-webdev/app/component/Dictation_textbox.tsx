"use client";
import { SetStateAction, useState, useEffect } from 'react';

interface DictationTextboxProps {
  value?: string;
}

const Dictation_textbox: React.FC<DictationTextboxProps> = ({ value = '' }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <textarea
      className='w-full h-[90%] rounded-lg border-2 border-grey-30'
      value={currentValue}
      onChange={handleChange}
      placeholder="Enter text here"
    />
  );
};

export default Dictation_textbox;
