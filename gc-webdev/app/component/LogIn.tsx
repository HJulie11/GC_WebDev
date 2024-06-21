import Link from 'next/link'
import React from 'react'

const LogIn = () => {
  return (
    <div className='flex flex-col center items-center justify-center h-[500px]'>
        <h1 className='text-4xl font-bold text-purple-heavy mb-5'>로그인 {/* Login */}</h1>
        <form className='flex flex-col gap-4 lg:w-[500px]'>
            <input type='text' placeholder='Email' className='p-2 border border-purple-light rounded' />
            <input type='password' placeholder='Password' className='p-2 border border-purple-light rounded' />
            <a className='bg-purple-heavy text-white font-bold p-2 rounded text-center' href='/home'> 로그인 {/* Login */}</a>
            <div className='flex flex-row center justify-center'>
                <a href="/register" className='text-sm text-center mr-10'>
                    <p className='text-underline text-grey-light'> 회원가입 {/* Register */} </p>
                </a>
                <a href="/adminhome" className='text-sm text-center'>
                    <p className='text-underline text-grey-light'> 관리자 로그인 {/* admin login */} </p>
                </a>
            </div>
        </form>
    </div>
  )
}

export default LogIn