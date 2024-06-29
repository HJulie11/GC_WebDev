"use client"
import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import CSVReader from 'react-csv-reader';

const AdminRegister = () => {
    const [formData, setFormData] = useState({
        name: '', // 담당자 이름 (기관 총괄 관리자) {/* Manager's name (Institutional overall manager) */}
        email: '', // 이메일 (담당자 - 연락 가능한 이메일) {/* Email (Manager - Contactable email) */}
        password: '', // 비밀번호 {/* Password */}
        confirmPassword: '',
        address: '', //기관 주소 {/* Institution address */}
        institute_name: '', //기관명 {/* Institution name */}
        mobile_number: '', //담당자 연락처 {/* Manager's contact number */}
        // admin_type: '', //관리자 유형 {/* Administrator type - two types for different access */}
        register_students: null, //등록 학생 {/* registered students */}
        register_admins: null, //그룹 관리자 등록 {/* admins for each group registered */}
    });

    const handleChange = (e : any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);


    const handleComplete = (data: { address: any; addressType: string; bname: string; buildingName: string; }) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setForm({
            ...formData,
            address: fullAddress,
        });
        setIsPostcodeOpen(false);
    };

    const handleFileLoad = (data: any) => {
        setForm({
          ...formData,
          register_students: data,
          register_admins: data,
        });
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        if (formData.register_students) {
            console.log('register_students:', formData.register_students);
        } 
        if (formData.register_admins) {
            console.log('register_admins:', formData.register_admins);
        }

    };

    return (
        <div className="flex items-center justify-center w-screen h-screen overflow:mt-[7rem] overflow:mb-[7rem]">
            <div className="flex flex-col w-[60%]">
                <h2 className="text-4xl font-bold mb-[4rem] text-center text-purple-heavy">관리자 등록</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-row mb-4 w-full'> {/* 기관명, 담당자 이름 */}
                        <div className="w-[50%] pr-5"> {/* 담당자 이름 */}
                            <label className="block text-[18px] mb-2" htmlFor="name">
                                담당자 이름 {/*Name*/}
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="appearance-none border-1 shadow-sm rounded py-2 px-3 text-gray-90 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className='w-[50%] px-5'> {/* 기관 이름 */}
                            <label className="block text-[18px] mb-2" htmlFor="institute_name">
                                기관 이름 {/* Institue name */}
                            </label>
                            <input
                                id="institute_name"
                                name="institute_name"
                                type="text"
                                value={formData.institute_name}
                                onChange={handleChange}
                                required
                                className="appearance-none border-1 shadow-sm rounded py-2 px-3 text-gray-90 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                    <div className='flex flex-row mb-4 w-full'> {/* 담당자 연락처 - 이메일, 전화번호 */}
                        <div className="w-[50%] pr-5"> {/* 이메일 */}
                            <label className="block text-[18px] mb-2" htmlFor="email">
                                이메일 {/*Email*/}
                                <span className="text-[15px] text-gray-20"> (연락 가능한 이메일로 작성해주세요.) {/* Manager - Contactable email */}</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="appearance-none border-1 shadow-sm w-full rounded py-2 px-3 text-gray-90 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className='w-[50%] px-5'> {/* 전화번호 */}
                            <label className="block text-[18px] mb-2" htmlFor="mobileNumber">
                                전화번호 {/*mobile number*/}
                                <span className="text-sm text-gray-20"> (01012345678 형태로 기입 - 번호만 기입) {/* only numbers */}</span>
                            </label>
                            <input
                                id="mobileNumber"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="appearance-none border-1 shadow-sm w-full rounded py-2 px-3 text-gray-90 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                    
                    <div className="mb-4"> {/* 비밀번호 */}
                        <label className="block text-[18px] mb-2" htmlFor="password">
                            비밀번호 {/*Password*/}
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="appearance-none border-1 shadow-sm rounded w-[40%] py-2 px-3 text-gray-90 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4"> {/* 비밀번호 확인 */}
                        <label className="block text-[18px] mb-2" htmlFor="confirmPassword">
                            비밀번호 확인 {/*Confirm Password*/}
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="appearance-none border-1 shadow-sm rounded w-[40%] py-2 px-3 text-gray-90 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    
                    <div className='mb-4'> {/* 주소 */}
                        <label className="block text-[18px] mb-2" htmlFor="address">주소: {/* address */} </label>
                        <input 
                            id="address" 
                            type="text" 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            readOnly required
                            className="appearance-none border-1 shadow-sm rounded w-[40%] py-2 px-3 text-gray-90 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button type="button" className="ml-5 bg-gray-10 text-black text-[15px] py-2 px-4" onClick={() => setIsPostcodeOpen(true)}>주소 찾기 {/* find address */}</button>
                    </div>
                    {isPostcodeOpen && (
                    <DaumPostcode
                            onComplete={handleComplete}
                            autoClose={false}
                            style={{ width: '100%', height: '400px' }}
                    />
                    )}
                    <div className='mb-4'> {/* 학생 파일 업로드 */}
                        <label className="block text-[18px] mb-2" htmlFor="register_students">학생 등록하기: <span className='text-[15px] text-gray-20'> 학생 정보를 업로드하려면 CSV 파일을 업로드하십시오. {/* Upload a CSV file to upload student information. */}</span></label>
                        <CSVReader onFileLoaded={handleFileLoad} />
                    </div>
                    <div className='mb-4'> {/* 그룹 관리자 파일 업로드 */}
                        <label className="block text-[18px] mb-2" htmlFor="register_admins">그룹별 관리자 등록하기: <span className='text-[15px] text-gray-20'> 그룹별 관리자 정보를 업로드하려면 CSV 파일을 업로드하십시오. {/* Upload a CSV file to upload student information. */}</span></label>
                        <CSVReader onFileLoaded={handleFileLoad} />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-purple-heavy text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            관리자로 등록하기 {/* Register; go to login page when the form is filled completely */}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminRegister

function setForm(arg0: any) {
    throw new Error('Function not implemented.');
}
