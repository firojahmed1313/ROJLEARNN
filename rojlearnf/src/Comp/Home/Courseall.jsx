import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseData } from '../../Redux/Features/Course/getCourseSlice'
import { formatDateString } from '../utlits/FormatDateString'
import CartColloder from '../utlits/loder/CartColloder'
import { getUserByid } from '@/Redux/Features/User/GetUserByidSlice'
import ButtomNavHome from '../Navber/ButtomNavHome'

const GetTeacherData = ({ dateObj, id }) => {
    // const dispatch = useDispatch();
    // const teacher = useSelector((state) => state.getUserById.userData);
    // console.log(teacher);
    // useEffect(() => {
    //     dispatch(getUserByid(id));
    // }, [id])
    // console.log(id);
    return (
        <>
            <a
                href="#"><img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
            <div className="text-sm">
                <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                    Jonathan Reinink
                </a>
                <p className="text-gray-600">{dateObj.month} - {dateObj.day} - {dateObj.year} at {dateObj.hour}:{dateObj.minutes}:{dateObj.seconds} {dateObj.period}</p>
            </div>
        </>
    )
}
const Courseall = () => {
    const [courseData, setCourseData] = useState([]);
    const dispatch = useDispatch();
    const course = useSelector((state) => state.getCourse.course);
    const loading = useSelector((state) => state.getCourse.isLoading);
    const error = useSelector((state) => state.getCourse.error);
    console.log(course);
    useEffect(() => {
        if (course != null) {
            setCourseData(course.data);
        }
    }, [course])


    useEffect(() => {
        dispatch(getCourseData());
    }, [])

    return (
        <>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <div className="mt-8 block lg:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                        <div className="hidden space-y-4 lg:block">
                            <div>
                                <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

                                <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
                                    <option>Sort By</option>
                                    <option value="Title, DESC">Title, DESC</option>
                                    <option value="Title, ASC">Title, ASC</option>
                                    <option value="Price, DESC">Price, DESC</option>
                                    <option value="Price, ASC">Price, ASC</option>
                                </select>
                            </div>

                            <div>
                                <p className="block text-xs font-medium text-gray-700">Filters</p>

                                <div className="mt-1 space-y-2">
                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                        >
                                            <span className="text-sm font-medium"> Availability </span>

                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                <li>
                                                    <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterInStock"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterPreOrder"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterOutOfStock"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>

                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                        >
                                            <span className="text-sm font-medium"> Price </span>

                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> The highest price is $600 </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <div className="border-t border-gray-200 p-4">
                                                <div className="flex justify-between gap-4">
                                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">$</span>

                                                        <input
                                                            type="number"
                                                            id="FilterPriceFrom"
                                                            placeholder="From"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>

                                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">$</span>

                                                        <input
                                                            type="number"
                                                            id="FilterPriceTo"
                                                            placeholder="To"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                        >
                                            <span className="text-sm font-medium"> Colors </span>

                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                <li>
                                                    <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterRed"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Red </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterBlue"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Blue </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterGreen"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Green </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterOrange"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Orange </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterPurple"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Purple </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterTeal"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Teal </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                                {
                                    (loading) ? <CartColloder /> :
                                        courseData?.map((course) => {
                                            const dateObj = formatDateString(course.created_at);
                                            return (
                                                <div
                                                    className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal" key={course._id}>
                                                    <img src={course.thumbnail_url} className="w-full mb-1" alt="COURSE THUMBNAIL" />
                                                    <div className="p-4 pt-2">
                                                        <div className="mb-2">
                                                            <p className="text-sm text-gray-600 flex items-center">
                                                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                                                                    </path>
                                                                </svg>
                                                                {course?.category}
                                                            </p>
                                                            <Link to={`/courses/${course._id}`} className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                                                                {course.title}</Link>
                                                            <p className="text-gray-700 text-sm">{course.description}</p>
                                                        </div>
                                                        <Link to={`/courses/${course._id}`} className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-blue-800 border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                                                        >
                                                            View Details
                                                        </Link>
                                                        <div className="flex items-center mt-3">
                                                            <GetTeacherData dateObj={dateObj} id={course.instructor} />
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                }




                            </div>

                        </div>

                    </div>
                </div>
                <div className="md:hidden w-full mx-auto left-0 fixed bottom-0">
                    <ButtomNavHome tab="Course" />
                </div>
            </section>
        </>
    )
}

export default Courseall