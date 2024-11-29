import React from 'react'
import { Icon } from '@iconify-icon/react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getProfileData } from '../../Redux/Features/User/UserSlice';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const tData = [

  {
    id: 1,
    title: 'DashBord',
    path: '/teacher',
    icon: 'ion:home-outline',
  },
  {
    id: 2,
    title: 'Profile',
    path: '/profile',
    icon: 'healthicons:ui-user-profile',
  },
  {
    id: 3,
    title: 'Courses',
    path: '/teacherCourses',
    icon: 'ion:book-outline',
  },
  {
    id: 4,
    title:'Assignments',
    path: '/teacherAssignment',
    icon: 'material-symbols:assignment-late-outline-rounded',
  },
  {
    id: 5,
    title: 'Exams',
    path: '/teacherExam',
    icon: 'healthicons:i-exam-multiple-choice-outline',
  },
  {
    id: 6,
    title: 'Tasks',
    path: '/teacherTask',
    icon: 'tdesign:task-visible',
  },
  {
    id: 7,
    title: 'All Courses',
    path: '/courses/?sortBy=ASE&order=price&minPrice=0&maxPrice=2000',
    icon: 'hugeicons:course',
  }

]

const sData = [

  {
    id: 1,
    title: 'DashBord',
    path: '/student',
    icon: 'ion:home-outline',
  },{
    id: 2,
    title: 'Profile',
    path: '/profile',
    icon: 'ion:person-outline',
  },
  {
    id: 3,
    title: 'Courses',
    path: '/studentCourse',
    icon: 'ion:book-outline', 
  },
  {
    id: 4,
    title: 'Exams',
    path: '/studentExam',
    icon: 'healthicons:i-exam-multiple-choice-outline',
  },
  {
    id: 5,
    title: 'Reports',
    path: '/studentReport',
    icon: 'healthicons:i-exam-qualification-outline',
  },
  {
    id: 6,
    title: 'Activity',
    path: '/studentActivity',
    icon: 'mynaui:activity-square',
  },
  {
    id: 7,
    title: 'All Courses',
    path: '/courses/?sortBy=ASE&order=price&minPrice=0&maxPrice=2000',
    icon: 'hugeicons:course',
  }
]
const ProfileNav = () => {
  const user = useSelector(state => state.getUser.user);
  const role = user?.role;
  //console.log(role);
  const token = Cookies.get("ROJLEARN");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(!token){
    navigate("/login");
  }
  useEffect(() => {
    setTimeout(() => {
      if(user==null){
        dispatch(getProfileData(token));
      }
      
    },1000)
    
  }, [])
  let location = useLocation();
  //console.log((location.pathname));
  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen overflow-hidden text-gray-400 bg-gray-900 ">
        <Link className="flex items-center w-full px-1 md:px-3 mt-3" to={"/"}>
          <Icon icon="oui:app-ml" width="48" height="48" className='items-center p-0 text-white ' /> 
          <span className="ml-2 text-sm invisible md:visible font-bold">ROJLEARN</span>
        </Link>
        <div className="w-full px-2">
          <div className="flex flex-col items-center justify-start justify-items-start w-full mt-3">
            {
              
              (role === 'Instructor' ? tData : sData).map((data) => {
              return (

                <Link className={`flex items-center w-full h-12 px-2 lg:px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 ${location.pathname === data.path ? 'bg-gray-700 text-gray-300' : ''}`} to={data.path} key={data.id}>
                  <Icon icon={data.icon} width="28" height="28" className='items-center p-0 ' />
                  <span className="ml-2 text-sm invisible md:visible font-medium">{data.title}</span>
                </Link>
              )
            } )}
          </div>
          
        </div>

      </div>


    </>
  )
}

export default ProfileNav