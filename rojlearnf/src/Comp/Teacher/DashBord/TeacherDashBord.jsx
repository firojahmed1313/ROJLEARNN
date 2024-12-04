import BarCharts from '@/Comp/Student/DashBord/BarCharts';
import PieCharts from '@/Comp/Student/DashBord/PieCharts';
import Clock from '@/Comp/Student/DashBord/Clock';
import DueTable from '@/Comp/Student/DashBord/DueTable';
import UpcTable from '@/Comp/Student/DashBord/UpcTable';
import Calender from '@/Comp/Student/DashBord/Calender';
import ChatStu from '@/Comp/Student/DashBord/ChatStu';
import { useSelector } from 'react-redux';
import React from 'react'


const TeacherDashBord = () => {
    const user = useSelector((state) => state.getUser.user);

  return (
    <>
        <div className='p-4'>
        <h1 className='text-3xl font-bold '>Hello, <span className='text-rose-600'>{user?.username}</span></h1>
        <p className='text-gray-500'>Nice to see you again, what an excellent day!</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-4 mx-3'>
        <BarCharts />
        <PieCharts />
        <div className='p-2 hidden lg:block pt-24 align-middle'>
          <Clock />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 my-4 mx-3'>
        <div className='p-2 w-full lg:w-2/3 '>
          <DueTable />
          <UpcTable />
        </div>

        <div className='p-2 pt-24 lg:w-1/3 hidden lg:block align-middle'>
          <Calender />
        </div>

      </div>
      <ChatStu />
    </>
  )
}

export default TeacherDashBord