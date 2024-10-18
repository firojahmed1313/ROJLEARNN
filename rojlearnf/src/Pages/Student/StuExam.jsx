import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import StudentsAssignment from '../../Comp/Student/StudentsAssignment'
import StudentsTask from '../../Comp/Student/StudentsTask'
import StudentsExam from '../../Comp/Student/StudentsExam'
import { Link } from 'react-router-dom'
const StuExam = () => {
  const [tab, setTab] = React.useState("Exam");
  const onOptionChangeHandler = (event) => {
    setTab(event.target.value);
    console.log(event.target.value);
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
              <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" className="w-full h-10 text-center text-white border-gray-200 bg-gray-800" onChange={onOptionChangeHandler}>
                  <option >Exam</option>
                  <option >Assignment</option>
                  <option > Task</option>
                </select>
              </div>

              <div className=" hidden sm:block ml-3">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex gap-6">
                    <button
                      onClick={() => setTab("Exam")}
                      className={`${tab === "Exam" ? "shrink-0 rounded-t-lg border-b-white border-gray-300 text-sky-600" : "text-gray-500 border-transparent"} shrink-0 border p-3 text-sm font-medium text-gray-500 hover:text-gray-700`}
                    >
                      Exam
                    </button>

                    <button
                      onClick={() => setTab("Assignment")}
                      className={`${tab === "Assignment" ? "shrink-0 rounded-t-lg border-b-white border-gray-300 text-sky-600" : "text-gray-500 border-transparent"} shrink-0 border p-3 text-sm font-medium text-gray-500 hover:text-gray-700`}
                    >
                      Assignment
                    </button>

                    

                    <button
                      onClick={() => setTab("Task")}
                      className={`${tab === "Task" ? "shrink-0 rounded-t-lg border-b-white border-gray-300 text-sky-600" : "text-gray-500 border-transparent"} shrink-0 border p-3 text-sm font-medium text-gray-500 hover:text-gray-700`}
                    >
                      Task
                    </button>
                  </nav>
                </div>
              </div>
            </div>

            {tab === "Exam" && <StudentsExam />}
            {tab === "Assignment" && <StudentsAssignment />}
            {tab === "Task" && <StudentsTask />}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default StuExam