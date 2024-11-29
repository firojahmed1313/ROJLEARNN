import React from 'react'
import ChatStu from './ChatStu'
import BarCharts from './BarCharts'
//import PieCharts from './PieCharts'
import Clock from './Clock'
import DueTable from './DueTable'
import UpcTable from './UpcTable'
import Calender from './Calender'
import PieCharts from './PieCharts'
import { useSelector } from 'react-redux'
const StudentDashBord = () => {
  const user = useSelector((state) => state.getUser.user);
  ////console.log(user)
  return (
    <>
      <div className='p-4'>
        <h1 className='text-3xl font-bold '>Hello, <span className='text-rose-600'>{user?.username}</span></h1>
        <p className='text-gray-500'>Nice to see you again, what an excellent day!. Get started with your learning.</p>
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

export default StudentDashBord