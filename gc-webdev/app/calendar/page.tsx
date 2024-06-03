"use client";

import Calendar from '../component/Calendar';

export default function Home() {
  return (
    <div className="flex center items-center justify-center mt-10 mb-10">
        <div className="container">
            <main className="main">
                <h1 className="flex center items-center justify-center mt-5 mb-5 font-bold text-[30px] text-purple-heavy">캘린더</h1>
                <Calendar />
            </main>
        </div>
    </div>
  );
}
