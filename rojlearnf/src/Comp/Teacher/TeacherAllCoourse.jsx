import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getCourseByTeacher } from '../../Redux/Features/Course/teacher/getCourseByTeacherSlice'
import { Link, useNavigate } from 'react-router-dom'
import { getProfileData } from '../../Redux/Features/User/UserSlice';
import { formatDateString } from '../utlits/FormatDateString'
import Cardrowloder from '../utlits/loder/Cardrowloder'
import AddCourse from './ADDP/AddCourse'

const TeacherAllCoourse = () => {
    const course = useSelector((state) => state.getTeacherCourse.courseByTeacher);
    const loading = useSelector((state) => state.getTeacherCourse.loading);
    const error = useSelector((state) => state.getTeacherCourse.error);
    const user = useSelector((state) => state.getUser.user);
    const token = Cookies.get("ROJLEARN");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!token) {
        navigate("/login");
    }
    useEffect(() => {
        setTimeout(() => {
            if (user == null) {
                dispatch(getProfileData(token));
            }

        }, 1000)

    }, [])
    useEffect(() => {
        setTimeout(() => {
            if (!course && user != null) {
                dispatch(getCourseByTeacher(user._id));
            }
        }, 2000)

    }, [])
    //console.log(course);
    return (
        <>
            <AddCourse />
            <div className="flex flex-col break-words bg-white w-[96%] mx-auto my-4 shadow-lg rounded-xl">
                {
                    (loading) ?
                        <Cardrowloder />
                        : (course) ?
                            course.map((item, index) => {
                                const dateObj = formatDateString(item.created_at);
                                return (
                                    <div className="flex h-full items-start justify-start m-4" key={index}>

                                        <div className=" flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 hidden md:block">
                                                <img
                                                    src={item.thumbnail_url}
                                                    alt="image"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                                    {item.category}
                                                </h6>
                                                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                    {item.title}
                                                </h4>
                                                <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                                    {item.descriptions}
                                                </p>
                                                <p className="mb-8 text-xs font-black text-gray-800">
                                                    {dateObj.month} - {dateObj.day} - {dateObj.year} at {dateObj.hour}:{dateObj.minutes}:{dateObj.seconds} {dateObj.period}
                                                </p>
                                                <Link className="inline-block" to={`/teachercoursevideo/${item._id}`}>
                                                    <button
                                                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        Learn More
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="2"
                                                            stroke="currentColor"
                                                            aria-hidden="true"
                                                            className="h-4 w-4"
                                                        >
                                                            <path
                                                                trokelinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }) :
                            <h2>No Course</h2>

                }

            </div>

        </>
    )
}

export default TeacherAllCoourse