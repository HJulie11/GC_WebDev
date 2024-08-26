"use client";

import React from 'react'
import NewsCard_page from '../component/NewsCard_page'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import MainLayout from '../component/MainLayout'

const page = () => {
  return (
    <>
    <MainLayout>
      <div className='flex center items-center justify-center mt-10 mb-10'>
          <div className='text-[30px] font-semi-bold text-purple-heavy'>뉴스</div>
      </div>
      <div className='flex mt-10 mb-10 ml-[170px] mr-[170px]'>
          <NewsCard_page />   
      </div>
    </MainLayout>
    </>
  )
}

export default page