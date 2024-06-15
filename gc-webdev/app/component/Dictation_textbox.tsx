"use client"
import { SetStateAction, useState } from 'react';

const Dictation_textbox = () => {
    const [value, setValue] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  };

  return (
    <textarea className='w-[50%] h-[70%] rounded-lg border-2 border-grey-30' value={value} onChange={handleChange} placeholder="Enter text here"/>
  )
}

export default Dictation_textbox