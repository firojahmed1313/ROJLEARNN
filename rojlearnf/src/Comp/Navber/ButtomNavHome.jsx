import React from 'react'
import { Icon } from '@iconify-icon/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const tData = [

    {
        id: 1,
        title: 'Home',
        tab: 'Home',
        link: '/',
        icon: 'material-symbols:home-rounded',
    },
    {
        id: 2,
        title: 'All Courses',
        tab: 'Course',
        link: '/courses',
        icon: 'material-symbols:book-outline-rounded',
    }

    
]
const ButtomNavHome = ({ tab, onClicks }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.getUser.user);
    const role = user?.role;
    const isAuth = useSelector((state) => state.getUser.isAuth);
    

    return (
        <>
            <div class=" z-10 px-2 w-full bg-gray-700 shadow-slate-400 shadow-inner rounded-lg">
                <div class="flex">
                    {tData.map((item, index) => (
                        <div class={`flex-1 group shadow-md `} key={index}>
                            <button class={`${tab === item.tab ? "text-white" : "text-gray-400"} flex items-end justify-center text-center mx-auto px-2 pt-2 w-full group-hover:text-white`}
                                onClick={() => navigate(item.link)}>
                                <span class={`block px-1 pt-1 pb-1`}>
                                    <Icon icon={item.icon} width="24" height="24" className={`${tab === item.tab ? "text-white" : "text-gray-400"} items-center p-0 group-hover:text-white`} />
                                    <span class="block text-xs pb-2">{item.title}</span>
                                    <span class={`${tab === item.tab ? "bg-white" : "text-gray-400"} block w-5 mx-auto h-1 group-hover:bg-white rounded-full`}></span>
                                </span>
                            </button>
                        </div>
                    ))}
                    {
                        (!isAuth) ?
                            <>
                                <div class={`flex-1 group shadow-md `}>

                                    <Link
                                        className="flex text-gray-400 items-end justify-center text-center mx-auto px-2 pt-2 w-full group-hover:text-white"
                                        to={"/login"}
                                    >
                                        <span class={`block px-1 pt-1 pb-1`}>
                                            <Icon icon="material-symbols:login-rounded" width="24" height="24" className={`${tab === "Login" ? "text-white" : "text-gray-400"} items-center p-0 group-hover:text-white`} />
                                            <span class="block text-xs pb-2">Login</span>
                                            <span class={`${tab === "Login" ? "bg-white" : "text-gray-400"} block w-5 mx-auto h-1 group-hover:bg-white rounded-full`}></span>
                                        </span>
                                    </Link>
                                </div>
                                <div class={`flex-1 group shadow-md `}>
                                    <Link
                                        className="text-gray-400 flex items-end justify-center text-center mx-auto px-2 pt-2 w-full group-hover:text-white"
                                        to={"/register"}
                                    >
                                        <span class={`block px-1 pt-1 pb-1`}>
                                            <Icon icon="material-symbols:person-add-rounded" width="24" height="24" className={`${tab === "Register" ? "text-white" : "text-gray-400"} items-center p-0 group-hover:text-white`} />
                                            <span class="block text-xs pb-2">Register</span>
                                            <span class={`${tab === "Register" ? "bg-white" : "text-gray-400"} block w-5 mx-auto h-1 group-hover:bg-white rounded-full`}></span>
                                        </span>
                                    </Link>
                                </div>
                            </> :
                            <>

                            <div class={`flex-1 group shadow-md `}>
                                    <Link
                                        className="text-gray-400 flex items-end justify-center text-center mx-auto px-2 pt-2 w-full group-hover:text-white"
                                        to={(role === "Student") ? "/student" : "/teacher"}
                                    >
                                        <span class={`block px-1 pt-1 pb-1`}>
                                            <Icon icon="healthicons:ui-user-profile" width="24" height="24" className={`${tab === "Profile" ? "text-white" : "text-gray-400"} items-center p-0 group-hover:text-white`} />
                                            <span class="block text-xs pb-2">Profile</span>
                                            <span class={`${tab === "Profile" ? "bg-white" : "text-gray-400"} block w-5 mx-auto h-1 group-hover:bg-white rounded-full`}></span>
                                        </span>
                                    </Link>
                            </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default ButtomNavHome