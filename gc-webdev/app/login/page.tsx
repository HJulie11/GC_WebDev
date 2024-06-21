import React from 'react'
import LogIn from '../component/LogIn'

const LogInPage = () => {
    return (
        <div className='flex center items-center justify-center h-screen'>
            <LogIn />
        </div>
    )
}

// LogInPage.getLayout = function getLayout(page: any){
//     return <LogInLayout>{page}</LogInLayout>;
// }

export default LogInPage;