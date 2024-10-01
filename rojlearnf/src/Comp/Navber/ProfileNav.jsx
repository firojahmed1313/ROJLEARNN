import React from 'react'
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';

const tData = [

  {
    id: 1,
    title: 'DashBord',
    path: '/dashbord',
    icon: 'ion:home-outline',
  },
  {
    id: 2,
    title: 'Profile',
    path: '/profile',
    icon: 'ion:person-outline',
  },
  {
    id: 3,
    title: 'Settings',
    path: '/settings',
    icon: 'ion:settings-outline',
  },
  {
    id: 4,
    title: 'Courses',
    path: '/courses',
    icon: 'ion:book-outline',
  },
]

const sData = [

  {
    id: 1,
    title: 'Profile',
    path: '/profile',
    icon: 'ion:person-outline',
  },
  {
    id: 2,
    title: 'Settings',
    path: '/settings',
    icon: 'ion:settings-outline',
  },
  {
    id: 3,
    title: 'Courses',
    path: '/courses',
    icon: 'ion:book-outline',
  },
  {
    id: 4,
    title: 'Logout',
    path: '/logout',
    icon: 'ion:log-out-outline'
  }
]
const ProfileNav = ({role}) => {
  return (
    <>
      <div class="flex flex-col items-center w-full min-h-screen overflow-hidden text-gray-400 bg-gray-900 ">
        <Link class="flex items-center w-full px-1 md:px-3 mt-3" to={"/"}>
          <Icon icon="oui:app-ml" width="48" height="48" className='items-center p-0 text-white ' /> 
          <span class="ml-2 text-sm invisible md:visible font-bold">ROJLEARN</span>
        </Link>
        <div class="w-full px-2">
          <div class="flex flex-col items-center justify-start justify-items-start w-full mt-3">
            {
              
              (role === 'Teacher' ? tData : sData).map((data) => {
              return (

                <Link class="flex items-center w-full h-12 px-2 lg:px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href={data.path}>
                  <Icon icon={data.icon} width="28" height="28" className='items-center p-0 ' />
                  <span class="ml-2 text-sm invisible md:visible font-medium">{data.title}</span>
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