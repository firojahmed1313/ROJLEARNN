import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseofStudent } from '../../Redux/Features/Course/getCourseofStudentSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../Redux/Features/User/UserSlice';
import {formatDateString} from '../utlits/FormatDateString'
import Cardrowloder from '../utlits/loder/Cardrowloder'


const AllStudentCourses = () => {
    const course = useSelector((state) => state.getCourseofStudent.course);
    const loading = useSelector((state) => state.getCourseofStudent.loading);
    const error = useSelector((state) => state.getCourseofStudent.error);
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
                dispatch(getCourseofStudent(user._id));
            }
        }, 2000)

    }, [])
    //console.log(course);

    //const dateObj = formatDateString();
    return (
        <>
            <div className="flex flex-col justify-center h-full">
                {
                    (loading) ? <Cardrowloder /> : (course) ?
                    course?.map((item, index) => {
                        const dateObj = formatDateString(item.created_at);

                        return (
                            <div className="flex flex-col justify-start mx-4 my-2 cursor-pointer" key={index} onClick={() => navigate(`/coursevideo/${item._id}`)}>
                                <div
                                    className="flex flex-row md:space-x-5 space-y-3 md:space-y-0  rounded-xl shadow-lg p-3 max-w-xl md:max-w-3xl border border-white bg-white">
                                    <div className="w-full md:w-1/3 bg-white place-items-center hidden md:block my-auto">
                                        <img src={item.thumbnail_url} alt="tailwind logo" className="rounded-xl" />
                                    </div>
                                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                                        <div className="flex justify-between item-center">
                                            <p className="text-gray-500 font-medium block">{item.category}</p>
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <p className="text-gray-600 font-bold text-sm ml-1">
                                                    4.96
                                                    <span className="text-gray-500 font-normal">(76 reviews)</span>
                                                </p>
                                            </div>
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd"
                                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                        clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                                {item.duration_hours}h</div>
                                        </div>
                                        <h3 className="font-black text-gray-800 md:text-3xl text-xl point" >{item.title}</h3>
                                        <p className="md:text-lg text-gray-500 text-base">{item.description}</p>
                                        <p className="text-xs font-black text-gray-800">
                                            {dateObj.month} - {dateObj.day} - {dateObj.year} at {dateObj.hour}:{dateObj.minutes}:{dateObj.seconds} {dateObj.period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }):<h2>No Course Found</h2>
                }

            </div>
        </>
    )
}

export default AllStudentCourses