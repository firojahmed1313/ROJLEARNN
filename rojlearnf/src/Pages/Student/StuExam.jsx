import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import StudentsAssignment from '../../Comp/Student/StudentsAssignment'
import StudentsTask from '../../Comp/Student/StudentsTask'
import StudentsExam from '../../Comp/Student/StudentsExam'
import { Link } from 'react-router-dom'
import ButtomNav from '@/Comp/Navber/ButtomNav'
const tData = [

  {
    id: 1,
    title: 'Exams',
    tab: 'Exam',
    icon: 'healthicons:i-exam-multiple-choice-outline',
  },
  {
    id: 2,
    title: 'Assignments',
    tab: 'Assignment',
    icon: 'material-symbols:assignment-outline-rounded',
  },
  {
    id: 3,
    title: 'Tasks',
    tab: 'Task',
    icon: 'jam:task-list',
  },
]
const StuExam = () => {
  const [tab, setTab] = React.useState("Exam");
  const onOptionChangeHandler = (tab) => {
    setTab(tab);
    console.log(tab);
  };
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <div className="w-full mb-4">


            <div>
              <div className=" hidden sm:block ml-3 my-4">
                <div className="hidden sm:block w-5/6 fixed top-16 right-0 z-50">
                  <ButtomNav tData={tData} tab={tab} onClicks={onOptionChangeHandler} />
                </div>
              </div>


            </div>
            <div className="my-20">
              {tab === "Exam" && <StudentsExam />}
              {tab === "Assignment" && <StudentsAssignment />}
              {tab === "Task" && <StudentsTask />}
            </div>


          </div>
          <div className="sm:hidden w-5/6 mx-auto fixed bottom-3 z-50">
            <ButtomNav tData={tData} tab={tab} onClicks={onOptionChangeHandler} />
          </div>
        </div>
      </div>
    </>
  )
}

export default StuExam