import React from 'react'
import { Icon } from '@iconify-icon/react';
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
const ButtomNav = ({tData,tab,onClicks}) => {
    return (
        <>
            <div class="px-2 bg-white shadow-slate-400 shadow-inner rounded-lg">
                <div class="flex">
                    {tData.map((item,index) => (
                        <div class="flex-1 group shadow-md" key={index}>
                            <button class={`${tab === item.tab ? "text-indigo-500" : "text-gray-400"} flex items-end justify-center text-center mx-auto px-2 pt-2 w-full group-hover:text-indigo-500`}
                                onClick={() => onClicks(item.tab)}>
                                <span class={`block px-1 pt-1 pb-1`}>
                                    <Icon icon={item.icon} width="24" height="24" className={`${tab === item.tab ? "text-indigo-500" : "text-gray-400"} items-center p-0 group-hover:text-indigo-500`} />
                                    <span class="block text-xs pb-2">{item.title}</span>
                                    <span class={`${tab === item.tab ? "bg-indigo-500" : "text-gray-400"} block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full`}></span>
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ButtomNav