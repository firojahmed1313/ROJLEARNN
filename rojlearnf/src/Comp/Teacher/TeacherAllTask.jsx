import React from 'react'
import AddTask from './ADDP/AddTask'

const data = [
    {
        id: 1,
        title: 'Task 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 2,
        title: 'Task 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 3,
        title: 'Task 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 4,
        title: 'Task 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    }
]
const TeacherAllTask = () => {
    return (
        <>
        <div>
                <p className=" text-center text-blue-700 mt-4 text-3xl font-bold">All Tasks</p>
            </div>
            <div className='my-4 '>

                <AddTask    />
            </div>
            {
                (data.length != 0)
                    ?
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-[96%] mx-auto">
                        {
                            data?.map((item) => {
                                return (
                                    <div
                                        class=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden"
                                    >
                                        <div class="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                                            <p class="absolute bottom-6 left-7 text-white text-2xl">{item.id}</p>
                                        </div>
                                        <div class="fill-violet-500 w-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                                <path fill="#9f7aea" d="M17.28 8.72a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0m0 6.56a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM7 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M7.75 15a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm8.236-11a2.25 2.25 0 0 0-2.236-2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4zM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1m0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5" />
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
                    : <h4>No Task</h4>
            }
        </>
    )
}

export default TeacherAllTask