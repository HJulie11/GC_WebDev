"use client"
import { Switch } from '@nextui-org/switch'
import React, { useState, useEffect, useContext, ChangeEvent } from 'react'
import axios from 'axios';
import { storeContext } from '../context/storeContext';
import LocalStorage from '@/constants/localstorage';

type Student = {
    name: string;
    group: string;
    dateofbirth: string;
    email: string;
    mobilenumber: string;
    address: string;
    gender: string;
  }

const StudentAdmin = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const { url, setToken } = useContext(storeContext)
    const [data, setData] = useState({
        name: '',
        email: '',
        mobilenumber: '',
        dateofbirth: '',
        gender:'',
        address:'',
        group: '',
    })

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const token = LocalStorage.getItem('token');
                if (!token) {
                    console.error('Token not found');
                    return;
                }

                const response = await axios.get(`${url}/api/admin/students`, {
                    headers: {
                        'token': token
                    }
                })

                console.log('Response data:', response.data)
                setStudents(response.data.studentlist)

            } catch (error) {
                console.error('Error fetching students', error)
            }
        }

        fetchStudents()
    }, [])

    return (
        <>
        <div className='flex flex-col center items-center p-10'>
            <div className='center items-center'>
                <p className='font-bold text-[30px] text-purple-heavy mb-5'>학생 관리</p>
                <p className='text-[23px] text-gray-30 mb-2'>Student list</p>
            </div>

            <div className='flex flex-row w-[65%] xl:w-[920px] center items-center px-1'>
                <div className='w-[30%]'>
                    <Switch defaultSelected color="primary" className='mb-5 mt-5'>
                        그룹별 {/* Translation: sort by group */}
                    </Switch>
                </div>

                <div className='w-[50%]'>

                </div>

                <div className='flex flex-row w-[20%]'>
                    <div className='grid w-[50%] pr-0 justify-end'>
                        <a className='text-purple-heavy text-[18px]'>+</a>
                    </div>
                    <div className='grid w-[50%] pr-0 justify-end'>
                        <a className='text-gray-30 text-[18px]'>⌫</a>
                    </div>
                </div>
            </div>
            
            <div className='w-[80%] items-center overflow-x-auto whitespace-nowrap'>
                <table className='w-[920px]'>
                    <thead className='bg-gray-10'>
                        <tr>
                            <td className='pl-5 pt-2 text-[18px]'>이름 {/* name */}</td>
                            <td className='pl-5 pt-2 text-[18px]'>그룹 {/* group */}</td>
                            <td className='pl-5 pt-2 text-[18px]'>생년월일 {/* date of birth (YYYY.mm.dd) */}</td>
                            <td className='pl-5 pt-2 text-[18px]'>이메일 {/* email address */}</td>
                            <td className='pl-5 pt-2 text-[18px]'>전화번호 {/* mobile number */}</td>
                            <td className='pl-5 pt-2 text-[18px]'>성별 {/* mobile number */}</td>
                            <td className='pl-5 pt-2 text-[18px]'>주소 {/* mobile number */}</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className='border-b-1 border-gray-10'>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-l-1 border-gray-10 text-[18px]'>홍길동</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>A</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>1990.01.01</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>sdfsdf@gmail.com</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>010-1234-5678</td>
                        </tr>
                        <tr className='border-b-1 border-gray-10'>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-l-1 border-gray-10 text-[18px]'>김땡땡</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>B</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>1990.01.01</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>sdfsdf@gmail.com</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>010-1234-5678</td>
                        </tr>
                        <tr className='border-b-1 border-gray-10'>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-l-1 border-gray-10 text-[18px]'>박땡땡</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>C</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>1990.01.01</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>sdfsdf@gmail.com</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>010-1234-5678</td>
                        </tr>
                        <tr className='border-b-1 border-gray-10'>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-l-1 border-gray-10 text-[18px]'>최땡땡</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>D</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>1990.01.01</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>sdfsdf@gmail.com</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>010-1234-5678</td>
                        </tr>
                        <tr className='border-b-1 border-gray-10'>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-l-1 border-gray-10 text-[18px]'>신땡땡</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>E</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>1990.01.01</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>sdfsdf@gmail.com</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>010-1234-5678</td>
                        </tr> */}
                        {students.map((student, index) => (
                            <tr key={index} className='border-b-1 border-gray-10'>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-l-1 border-gray-10 text-[18px]'>{student.name}</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>{student.group}</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>{student.dateofbirth}</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>{student.email}</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>{student.mobilenumber}</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>{student.gender}</td>
                            <td className='pl-5 pt-2 pb-2 border-r-1 border-gray-10 text-[18px]'>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        </>
    )
}

export default StudentAdmin