import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const data = [
  {
    id: 1,
    title: 'Assignment 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
  },
  {
    id: 2,
    title: 'Assignment 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
  },
  {
    id: 3,
    title: 'Assignment 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum '
  },
  {
    id: 4,
    title: 'Assignment 4',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
  }
]
const StudentsAssignment = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p className=" text-center text-blue-700 my-4 text-3xl font-bold">All Assignment</p>
      </div>

      {
        (data.length != 0)
          ?
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-[96%] mx-auto">
            {
              data?.map((item) => {
                return (
                  <div
                    onClick={() => navigate(`/studentAssignment/${item.id}`)}
                    class=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden cursor-pointer"
                  >
                    <div class="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                      <p class="absolute bottom-6 left-7 text-white text-2xl">{item.id}</p>
                    </div>
                    <div class="fill-violet-500 w-20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <g fill="none" stroke="#9f7aea" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                          <path d="M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8" />
                          <path d="m32 6l-4 4l4 4m6-8l4 4l-4 4M14 42h20" />
                        </g>
                      </svg>
                    </div>
                    <h1 class="font-bold text-xl">{item.title}</h1>
                    <p class="text-sm text-zinc-500 leading-6">
                      {item.desc}
                    </p>
                  </div>
                )
              })
            }




          </div>
          : <h4>No Assignment</h4>
      }


    </>
  )
}

export default StudentsAssignment