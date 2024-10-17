import React from 'react'
import Topnav from '../Comp/Navber/Topnav'
import { Link, useLocation } from 'react-router-dom'
import StudentCourseVideo from '../Comp/Student/StudentCourseVideo';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseDetailsData } from '../Redux/Features/Course/getCourseDetailsSlice'
import { useEffect } from 'react'


const CourseVideo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = location.pathname.substring(13);
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
                                to={`/studentCourse`}
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
                <div class="max-w-screen-md mx-auto text-center">
                    <h1 class="mb-4 text-3xl font-bold dark:text-white"> <span class="text-indigo-600">{course?.data.title}</span></h1>
                    <p class="text-gray-500 dark:text-white">{course?.data.description}</p>
                    <div class="flex justify-between item-center">
                        <p class="text-gray-500 font-medium block">{course?.data.category}</p>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <p class="text-gray-600 font-bold text-sm ml-1">
                                4.96
                                <span class="text-gray-500 font-normal">(76 reviews)</span>
                            </p>
                        </div>
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                            {course?.data.duration_hours}h</div>
                    </div>
                </div>
                <StudentCourseVideo />

            </div>
        </>
    )
}

export default CourseVideo