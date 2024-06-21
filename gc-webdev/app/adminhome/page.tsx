import React from 'react'
import AdminLayout from './layout'

const AdminHome = () => {
    return (
        <div className='flex flex-col center justify-center items-center'>
            관리자 페이지 {/* translation: Admin Page */}
        </div>
    )
}

AdminHome.getLayout = (page: any) => page;

export default AdminHome;