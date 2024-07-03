"use client"
import Link from 'next/link'
import {useContext, useState, useEffect} from 'react'
import { storeContext } from '../context/storeContext'
import { eachMonthOfInterval } from 'date-fns'
import { error, group } from 'console'
import axios from 'axios'

const LogIn = ({setEmail}: {setEmail: React.Dispatch<React.SetStateAction<string>>}) => {

    const { url , setToken } = useContext(storeContext)
    const [currState, setCurrState] = useState('로그인')
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState('')

    const onChangeHandler = (event : any) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data, [name]: value}));
    };

    const onLogin = async (event : any) => {
        event.preventDefault()
        // setError('') //clear any previous error
        let newUrl = url
        if(currState === '로그인'){
            newUrl += '/api/user/login';
        }

        // console.log('Reguest URL: ', newUrl)

        try{

            const response = await axios.post(newUrl, data)
            // console.log('Response data:', response.data) //log response data for debugging
            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                // window.location.href = '/' //Redirect to the landing page
                setEmail(data.email)
                localStorage.setItem('email', data.email)
            } else {
                alert(response.data.message)
            }

        } catch (error) {
            // console.log(error)
            if (axios.isAxiosError(error)) {
                //log the error details
                console.error('Axios error:', error.toJSON())
                setError(error.response?.data?.message || '로그인 실패. 다시 시도해주세요.') // Translation: Login failed. Please try again.
            }
            console.error('Login error:', error) //log any errors for debugging
            setError('로그인 실패. 다시 시도해주세요.') // Translation: Login failed. Please try again.
        }


    }
    
    return (
        <div className='flex flex-col center items-center justify-center h-[500px]'>
            <h1 className='text-4xl font-bold text-purple-heavy mb-5'>로그인 {/* Login */}</h1>
            <form onSubmit={onLogin} action="" className='flex flex-col gap-4 lg:w-[500px]'>
                {/* {currState === '로그인' ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type = 'text' placeholder='Name' required></input>} */}
                <input 
                    type='email' 
                    name='email'
                    placeholder='Email' 
                    value={data.email} 
                    onChange={onChangeHandler} 
                    className='p-2 border border-purple-light rounded'
                />
                <input 
                    type='password' 
                    name = 'password'
                    placeholder='Password' 
                    value = {data.password}
                    onChange={onChangeHandler}
                    className='p-2 border border-purple-light rounded' 
                />
                { error && <p className='text-red-500 text-sm'>{error}</p>}
                <button type="submit" className='bg-purple-heavy text-white font-bold p-2 rounded text-center'> 
                    {currState} {/* Login */}
                </button>
                <div className='flex flex-row center justify-center'>
                    <Link href="/register">
                        {/* <a className='text-sm text-center mr-10'> */}
                        <p className='text-sm text-center mr-10 underline text-grey-light'> 회원가입 {/* Register */} </p>
                        {/* </a> */}
                    </Link>
                    <Link href="adminlogin">
                        {/* <a className='text-sm text-center'> */}
                        <p className='text-sm text-center underline text-grey-light'> 관리자 로그인 {/* admin login */} </p>
                        {/* </a> */}
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LogIn