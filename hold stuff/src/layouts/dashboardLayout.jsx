import React from 'react'
import Dashboard from '../pages/dashboard';
import TopNav from '../components/topNav';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className='dashboard w-[100%] bg-backgroundGrey overflow-hidden'>
            <div className='flex flex-col flex-1 sticky'>
                <TopNav />
                <>
                <Outlet/>
                </>
            </div>
        
    </div>
  )
}

export default DashboardLayout