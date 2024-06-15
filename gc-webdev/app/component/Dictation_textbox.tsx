"use client"
import { SetStateAction, useState } from 'react';

const Dictation_textbox = () => {
    const [value, setValue] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  };

  return (
    <input className='w-[60%] h-full rounded-lg border-2 border-grey-30' type="text" value={value} onChange={handleChange} placeholder="Enter text here"/>
  )
}

export default Dictation_textbox