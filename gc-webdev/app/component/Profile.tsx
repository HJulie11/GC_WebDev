// pages/profile.tsx
"use client"
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { storeContext } from '../context/storeContext';
import LocalStorage from '@/constants/localstorage';

const Profile = () => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    dateofbirth: '',
    mobilenumber: '',
    address: '',
    institute: '',
    group: ''
  });
  const [loading, setLoading] = useState(true);
  const { setToken } = useContext(storeContext);
  const router = useRouter();
  const localToken = LocalStorage.getItem('token');

  useEffect(() => {
    if (localToken) {
      setToken(localToken);
      console.log("Token found in localStorage:", localToken);
    } else {
        router.push('/login');
        console.log("Token not found in localStorage");
    }

    // const fetchUserData = async () => {
    //   try {
    //     const response = await axios.get('/api/user/profile', {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     setUser(response.data);
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //     router.push('/login');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchUserData();
  }, [localToken, setToken]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <div>Error loading user data</div>;
//   }

  return (
    <div className='flex center items-center justify-center p-20 bg-purple-light'>
      <div className='flex flex-row w-full h-full bg-white shadow-lg rounded-[5px]'>
        <div className='flex flex-col center items-center justify-center w-[30%] h-full p-10'>
          <div className='w-[200px] h-[200px] rounded-full bg-purple-light'></div>
          <div className='mt-5 flex flex-row center items-center justify-center'>
            <h1 className='regular-24 mr-2'>{user.fullname}</h1>
            <button className='text-purple-heavy text-[20px]'>✐</button>
          </div>
        </div>
        <div className='flex flex-col justify-center w-[70%] h-full p-10'>
          <div>
            <div className='mt-0 ml-0 text-[25px] text-bold text-purple-heavy'>
              개인정보 {/** Translation: Personal Information */}
            </div>
            <div className='flex flex-row mt-5 ml-5 text-[18px]'>
              <div className='flex flex-col w-[30%] ml-0'>
                <div className='mb-5'>이름{/** Name */}</div>
                <div className='mb-5'>이메일 {/** Email */}</div>
                <div className='mb-5'>생년월일 {/** Date of Birth */}</div>
                <div className='mb-5'>전화번호 {/** Phone number */}</div>
                <div className='mb-5'>주소 {/** Address */}</div>
                <div className='mb-5'>학교 {/** Institute */}</div>
                <div className='mb-5'>그룹 {/** Group */}</div>
              </div>
              <div className='flex flex-col w-[70%] ml-0'>
                <div className='mb-5'>{user.fullname}</div>
                <div className='mb-5'>{user.email}</div>
                <div className='mb-5'>{user.dateofbirth}</div>
                <div className='mb-5'>{user.mobilenumber}</div>
                <div className='mb-5'>{user.address}</div>
                <div className='mb-5'>{user.institute}</div>
                <div className='mb-5'>{user.group}</div>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-10 ml-0 text-[25px] text-bold text-purple-heavy'>
              이용 정보 {/** Translation: Usage Information */}
            </div>
            <div className='flex center items-center ml-5'>
              <div className='flex flex-col w-[40%] h-[400px] rounded-lg shadow-lg p-5 mt-5'>
                <div className='mb-5 bg-gray-20 w-full h-[50%]'></div>
                <div className='mb-5 font-bold text-[40px]'>Plan Name</div>
                <div className='mb-5 text-[20px]'>Plan cost</div>
                <div className='mb-5 text-[15px] text-gray-30'>Plan start date~end date</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
