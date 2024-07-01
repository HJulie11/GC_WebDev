"use client"
import React, { useContext, useState, useEffect } from 'react'
import { storeContext } from '../context/storeContext'
import axios from 'axios'

const AdminLogin = () => {
  const { url, setToken } = useContext(storeContext)
  const [currState, setCurrState] = useState('로그인')
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const onChangeHandler = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event: any) => {
    event.preventDefault()
    let newUrl = url
    if (currState === '로그인') {
      newUrl += '/api/admin/login'
    }

    const response = await axios.post(newUrl, data)
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token)
    }
    else {
      alert(response.data.message)
    }
  }
  return (
    <div className='flex flex-col center items-center justify-center h-[500px]'>
        <h1 className='text-4xl font-bold text-purple-heavy mb-5'>로그인 {/* Login */}</h1>
        <form onSubmit={onLogin} className='flex flex-col gap-4 lg:w-[500px]'>
            <input type='text' placeholder='Email' className='p-2 border border-purple-light rounded' />
            <input type='password' placeholder='Password' className='p-2 border border-purple-light rounded' />
            <a className='bg-purple-heavy text-white font-bold p-2 rounded text-center' href='/adminhome'> {currState} {/* Login */}</a>
            <div className='flex flex-row center justify-center'>
                <a href="/adminregister" className='text-sm text-center'>
                    <p className='text-underline text-grey-light'> 관리자 등록 {/* Register admin */} </p>
                </a>
            </div>
        </form>
    </div>
  )
}

export default AdminLogin