import React from 'react'
import ChatStu from './ChatStu'
import BarCharts from './BarCharts'
//import PieCharts from './PieCharts'
import Clock from './Clock'
import DueTable from './DueTable'
import UpcTable from './UpcTable'
import Calender from './Calender'
const StudentDashBord = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-4 my-4 mx-3'>
        <BarCharts />
        <BarCharts />
        <div className='p-2 hidden md:block align-middle'>
          <Clock />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 my-4 mx-3 border-2'>
        <div className='p-2 w-2/3 border border-red-800'>
          <DueTable />
          <UpcTable />
        </div>

        <div className='p-2 w-1/3 hidden md:block align-middle'>
          <Calender />
        </div>

      </div>
      <ChatStu />
    </>
  )
}

export default StudentDashBord