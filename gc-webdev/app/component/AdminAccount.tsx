"use client"
import React, { useEffect, useState } from 'react'

const AdminAccount = () => {
    const [position, setPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='flex flex-col center items-center p-10'>
            <div className='flex flex-col center justify-start w-[75%] ml-0'>
                <h1 className='text-4xl font-bold text-purple-heavy mb-2'>@USERNAME <span className='text-4xl font-bold text-gray-20 mb-2'>님의 계정</span></h1>
                <p className='text-[23px] text-gray-30'>Admin Profile</p>
            </div>
            <div className='flex flex-row center justify-center w-[80%] ml-0 mt-10'>
                <div className='flex flex-col w-[35%] p-2'>
                    <div className='flex flex-col center items-center justify-center w-full'>
                        <div className='w-[100px] h-[100px] bg-gray-20 rounded-full'>
                        </div>
                        <div className='mt-5 flex flex-row center items-center justify-center'>
                            <h1 className='text-purple-heavy text-[20px] mr-2'>User Name</h1>
                            <button className='text-gray-30 text-[20px]'>✐</button>
                        </div>
                        <div className='text-[14px] text-gray-30 mt-2'>가입일자: yyyy.mm.dd {/* registration date */}</div>
                    </div>
                </div>
                <div className='w-[65%] p-3'>
                    <div>
                        <div className='mt-0 ml-0 text-[25px] text-bold text-purple-heavy'>
                            계정 정보 {/** Translation: account Information */}
                        </div>
                        <table className='w-full mt-5 ml-5 text-[18px]'>
                            <tbody>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>사용자 ID {/* User ID */}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>abcd03$$</td>
                                </tr>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>비밀번호 {/** Password */}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>
                                        <button className='text-purple-middle underline text-[18px]'>비밀번호 변경 {/** Change password */}</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-10'>
                        <div className='mt-0 ml-0 text-[25px] text-bold text-purple-heavy'>
                            가입 정보 {/** Translation: user Information */}
                        </div>
                        <table className='w-full mt-5 ml-5 text-[18px]'>
                            <tbody>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>기관이름{/** institute Name */}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>메이플어학원</td>
                                </tr>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>직책{/** position */}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>관리자</td>
                                </tr>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>담당자 이름{/** person in charge (institute admin) Name */}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>홍길동</td>
                                </tr>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>담당자 전화번호 {/** Phone number (contact)*/}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>010-1234-5678</td>
                                </tr>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>이메일 {/** Email */}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>abcd@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>주소 {/** Address */}</td>
                                    <td className='mb-5 w-[70%] p-3 ml-0'>경기도 화성시 동탄반석로 130 드림프라자 000호</td>
                                </tr>
                                <tr>
                                    <td className='mb-5 w-[30%] p-3 ml-0 text-gray-50'>가입학생 수 {/** number of student registered*/}</td>
                                    <td className='flex flex-row w-[70%] p-3'><div>100명</div><a href='\studentadmin' className='flex text-[15px] text-gray-30 ml-5 center items-center'> ▶︎ 학생 관리 바로가기 {/* go to student admin page */}</a> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAccount