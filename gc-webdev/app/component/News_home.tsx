import React from 'react'
import Card from './NewsCard'



const News_home = () => {
  return (
    <div className='flew w-[100%] mt-10 mb-10 '>
        <div className='flex flex-row center items-center ml-20 mr-20'>
            <div className='w-[15%] font-bold'>CNN News</div>
            <div className='w-[85%] h-[320px] items-center flex flex-row overflow-x-auto whitespace-nowrap pl-1'>
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
            </div>
        </div>

        <div className='flex flex-row center items-center ml-20 mr-20'>
            <div className='w-[15%] font-bold'>BBC News</div>
            <div className='w-[85%] h-[320px] items-center flex flex-row overflow-x-auto whitespace-nowrap pl-1'>
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
                <Card title='dummytitle' url="dummyurl" thumbnail='dummyurl' />
            </div>
        </div>
    </div>
  )
}

export default News_home