import React from 'react'
import Topnav from '../../Comp/Navber/Topnav'
import { Link, useLocation } from 'react-router-dom'
import StudentCourseVideo from '../../Comp/Student/veat/StudentCourseVideo';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseDetailsData } from '../../Redux/Features/Course/getCourseDetailsSlice'
import { useEffect, useState } from 'react'
import StuCourseNav from '../../Comp/Navber/StuCourseNav';
import StudentCourseExam from '../../Comp/Student/veat/StudentCourseExam';
import StudentCourseAss from '../../Comp/Student/veat/StudentCourseAss';
import StudentCourseTask from '../../Comp/Student/veat/StudentCourseTask';
import ButtomNav from '@/Comp/Navber/ButtomNav';
import Hr from '@/Comp/utlits/Hr';

const tData = [

    {
        id: 1,
        title: 'Video',
        tab: 'video',
        icon: 'tabler:video',
    },
    {
        id: 2,
        title: 'Exam',
        tab: 'exam',
        icon: 'healthicons:i-exam-multiple-choice-outline',
    },
    {
        id: 3,
        title: 'Assignment',
        tab: 'assignment',
        icon: 'material-symbols:assignment-outline-rounded',
    },
    {
        id: 4,
        title: 'Task',
        tab: 'task',
        icon: 'jam:task-list',
    },
]

const TeacherCourseVideo = () => {
    const [navset, setNavset] = useState("video");
    const onOptionChangeHandler = (tab) => {
        setNavset(tab);
        console.log(tab);
    }
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = location.pathname.substring(20);
    console.log(id);
    const token = Cookies.get('ROJLEARN');
    console.log(token);
    const course = useSelector((state) => state.getCourseDetails.course);
    console.log(course);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
            dispatch(getCourseDetailsData(id));
        }
    }, [id])

    return (
        <>
            <div className='w-full'>
                <Topnav />

                <nav aria-label="Breadcrumb" className="flex w-full">
                    <ol className="flex w-full overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                        <li className="flex items-center">
                            <Link
                                to={"/"}
                                className="flex h-10 items-center gap-1.5 bg-gray-500 px-4 transition text-gray-900 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>

                                <span className="ms-1.5 text-xs font-medium"> Home </span>
                            </Link>
                        </li>

                        <li className="relative flex items-center">
                            <span
                                className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-500 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                            >
                            </span>

                            <Link
                                to={`/teacherCourses`}
                                className="flex h-10 items-center bg-gray-300 pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                            >
                                Course
                            </Link>
                        </li>
                        <li className="relative flex items-center">
                            <span
                                className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-300 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                            >
                            </span>

                            <p
                                className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                            >
                                Video
                            </p>
                        </li>
                    </ol>
                </nav>
                <div className="space-y-3 mx-4 my-2">
                    <h5 className="text-sm font-medium uppercase text-gray-400">{course?.data.category.toUpperCase()}</h5>
                    <h1 className="text-3xl font-semibold">{course?.data.title}</h1>
                    <p className="">{course?.data.description}</p>

                    <ul className="flex gap-4">
                        <li className="flex items-center">
                            <span className="mr-1.5 rounded bg-gray-900 px-2 text-sm font-semibold text-white"> 4.9 </span>
                            <div className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-purple-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-purple-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-purple-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-purple-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </div>
                        </li>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path trokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            245 Enrolled
                        </li>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                            {course?.data.duration_hours}h
                        </div>
                    </ul>
                    <ul className="sm:flex items-center text-sm text-gray-500">
                        <li>Created by <a href="#" className="font-bold"> Stella Johnson </a></li>
                        <span className="hidden sm:inline mx-3 text-2xl">·</span>
                        <li>Last updated 01/2022</li>
                    </ul>
                </div>
                
                <div className="hidden sm:block border-b-2 border-gray-200 dark:border-neutral-700">
                    <nav className="-mb-0.5 flex gap-x-6">
                        <button className={`${navset === "video" ? "border-blue-600 text-blue-600" : "border-transparent"} py-4 px-1 inline-flex items-center gap-2 border-b-2 text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500`} onClick={() => setNavset("video")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28">
                                <path fill="#404040" d="M5.75 6A3.75 3.75 0 0 0 2 9.75v8.5A3.75 3.75 0 0 0 5.75 22h9.5A3.75 3.75 0 0 0 19 18.25v-.503l4.252 2.936c1.16.801 2.744-.03 2.744-1.44V8.753c0-1.41-1.584-2.242-2.744-1.44L19 10.249V9.75A3.75 3.75 0 0 0 15.25 6zM19 12.071l5.104-3.524a.25.25 0 0 1 .392.206v10.49a.25.25 0 0 1-.392.206L19 15.923zM3.5 9.75A2.25 2.25 0 0 1 5.75 7.5h9.5a2.25 2.25 0 0 1 2.25 2.25v8.5a2.25 2.25 0 0 1-2.25 2.25h-9.5a2.25 2.25 0 0 1-2.25-2.25z" />
                            </svg>
                            Video
                        </button>
                        <button className={`${navset === "exam" ? "border-blue-600 text-blue-600" : "border-transparent"} py-4 px-1 inline-flex items-center gap-2 border-b-2 text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500`} onClick={() => setNavset("exam")} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                <g fill="#404040">
                                    <path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
                                    <path fillRule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clipRule="evenodd" />
                                    <path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" />
                                    <path fillRule="evenodd" d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z" clipRule="evenodd" />
                                </g>
                            </svg>
                            Exam
                        </button>
                        <button className={`${navset === "homework" ? "border-blue-600 text-blue-600" : "border-transparent"} py-4 px-1 inline-flex items-center gap-2 border-b-2 text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500`} onClick={() => setNavset("homework")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#404040" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h4.7q-.137-.766.366-1.383Q11.184 2 12 2q.835 0 1.338.617T13.685 4h4.7q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M7.5 16.27h6v-1h-6zm0-3.77h9v-1h-9zm0-3.77h9v-1h-9zM12 4.443q.325 0 .538-.212t.212-.538t-.213-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212M5 19V5z" />
                            </svg>
                            Assignment
                        </button>
                        <button className={`${navset === "task" ? "border-blue-600 text-blue-600" : "border-transparent"} py-4 px-1 inline-flex items-center gap-2 border-b-2 text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500`} onClick={() => setNavset("task")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                                <path fill="#404040" d="M26.41 25L30 21.41L28.59 20L25 23.59L21.41 20L20 21.41L23.59 25L20 28.59L21.41 30L25 26.41L28.59 30L30 28.59z" />
                                <path fill="#404040" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v10h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z" />
                            </svg>
                            Task
                        </button>
                    </nav>
                </div>
                <div className="mb-20">
                <Hr/>
                {
                    navset == "video" ?
                        <StudentCourseVideo id={id} role="teacher" />
                        : (navset == "exam") ? <StudentCourseExam id={id} role="teacher" /> : (navset == "task") ? <StudentCourseTask id={id} role="teacher" /> : <StudentCourseAss id={id} role="teacher" />
                }
                </div>
                
                <div className="sm:hidden w-full left-0 mx-auto fixed bottom-0 z-50">
                    <ButtomNav tData={tData} tab={navset} onClicks={onOptionChangeHandler} />
                </div>
            </div>
        </>
    )
}

export default TeacherCourseVideo