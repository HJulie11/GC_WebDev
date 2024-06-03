import React from 'react'
import NewsCard_page from '../component/NewsCard_page'

const page = () => {
  return (
    <>
    <div className='flex center items-center justify-center mt-10 mb-10'>
        <div className='text-[30px] font-semi-bold text-purple-heavy'>뉴스</div>
    </div>
    <div className='flex mt-10 mb-10 ml-[170px] mr-[170px]'>
        <NewsCard_page />   
    </div>
    </>
  )
}

export default page