"use client"
import Link from 'next/link'
import {useContext, useState, useEffect} from 'react'
import {storeContext} from '../context/storeContext'
import { eachMonthOfInterval } from 'date-fns'
import { group } from 'console'
import axios from 'axios'

const LogIn = ({  }) => {

    const { url , setToken } = useContext(storeContext)
    const [currState, setCurrState] = useState('로그인')
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data, [name]: value}))
    }

    const onLogin = async (event : any) => {
        event.preventDefault()
        let newUrl = url
        if(currState === '로그인'){
            newUrl += '/api/user/login'
        }

        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
            // setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }

    }
    
    return (
        <div className='flex flex-col center items-center justify-center h-[500px]'>
            <h1 className='text-4xl font-bold text-purple-heavy mb-5'>로그인 {/* Login */}</h1>
            <form onSubmit={onLogin} action="" className='flex flex-col gap-4 lg:w-[500px]'>
                <input type='text' placeholder='Email' className='p-2 border border-purple-light rounded' />
                <input type='password' placeholder='Password' className='p-2 border border-purple-light rounded' />
                <a className='bg-purple-heavy text-white font-bold p-2 rounded text-center' href="/" type='submit'> {currState} {/* Login */}</a>
                <div className='flex flex-row center justify-center'>
                    <a href="/register" className='text-sm text-center mr-10'>
                        <p className='text-underline text-grey-light'> 회원가입 {/* Register */} </p>
                    </a>
                    <a href="/adminlogin" className='text-sm text-center'>
                        <p className='text-underline text-grey-light'> 관리자 로그인 {/* admin login */} </p>
                    </a>
                </div>
            </form>
        </div>
    )
}

export default LogIn