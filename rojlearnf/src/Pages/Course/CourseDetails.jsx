import React, { useEffect, useState } from 'react'
import Nav from '../../Comp/Navber/Nav'
import Testimonials from '../../Comp/Home/Testimonials'
import Footer from '../../Comp/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseDetailsData } from '../../Redux/Features/Course/getCourseDetailsSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getCourseRateing } from '@/Redux/Features/Course/getCourseRateingSlice'
import CartColloder from '@/Comp/utlits/loder/CartColloder'
import Cardrowloder from '@/Comp/utlits/loder/Cardrowloder'
import { getProfileData } from '@/Redux/Features/User/UserSlice'

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import ButtomNavHome from '@/Comp/Navber/ButtomNavHome'



const token = Cookies.get('ROJLEARN');
const burl = import.meta.env.VITE_URL;
const addCart = async (data) => {

    const response = await axios.post(`${burl}/cart/addItemToCart`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
    return response.data;
}

const CourseDetails = () => {
    const [courseData, setCourseData] = useState([]);
    const navigate = useNavigate();
    const token = Cookies.get('ROJLEARN');
    console.log(token);
    let location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.substring(9);
    console.log(id);
    const course = useSelector((state) => state.getCourseDetails.course);
    const isloading = useSelector((state) => state.getCourseDetails.isLoading);
    const isError = useSelector((state) => state.getCourseDetails.isError);
    console.log(course);
    const courseRateing = useSelector((state) => state.getCourseRateing.courseRateing);
    console.log(courseRateing);
    const User = useSelector((state) => state.getUser);
    useEffect(() => {
        if (course != null) {
            setCourseData(course.data);
        }
    }, [])
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
            dispatch(getProfileData(token));
            dispatch(getCourseDetailsData(id));
            dispatch(getCourseRateing(id));

        }
    }, [id])
    console.log("courseData : ", courseData);
    const { mutate, isLoading, error } = useMutation({
        mutationFn: addCart,
        onSuccess: (data) => {
            console.log(data);
            toast.success("Added to cart", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        },
        onError: (error) => {
            console.log("Some Error", error);
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    });
    const handelCart = () => {
        console.log("handelCart", course.data);
        const courseid = course.data._id;
        const userid = User.user._id;
        const price = course.data.price;
        const data = {
            courseid,
            userid,
            price
        }
        console.log(data);
        mutate(data);

    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Nav />
            {
                (isloading && !isError) ?
                    <section className="text-gray-600 w-[80%] g:w-[60%] mx-auto my-4 lg:my-11 body-font overflow-hidden">
                        <Cardrowloder />
                    </section>
                    : (course?.data) ?
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-16 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">

                                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src={course.data.thumbnail_url} />
                                    <span
                                        className="h-16 absolute top-auto left-auto rounded-br-3xl rounded-ss-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                                    >
                                        Save 10%
                                    </span>
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{course.data?.category.toUpperCase()}</h2>
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{course.data.title} <sup className="bg-blue-100  text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 relative  rounded dark:bg-blue-200 dark:text-blue-800 ms-2">{course.data.duration_hours}</sup></h1>
                                        <div className="flex mb-4">
                                            <span className="flex items-center">
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <span className="text-gray-600 ml-3">4 Reviews</span>
                                            </span>
                                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                                <a className="text-gray-500">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a className="text-gray-500">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </a>
                                                <a className="text-gray-500">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                        <p className="leading-relaxed">{course.data.description}</p>
                                        {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                        <div className="flex">
                                            <span className="mr-3">Color</span>
                                            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                        </div>
                                        <div className="flex ml-6 items-center">
                                            <span className="mr-3">Size</span>
                                            <div className="relative">
                                                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                    <option>SM</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                                        <div className="flex mt-4">
                                            <span className="title-font font-medium text-2xl text-gray-900">${course.data.price}</span>
                                            <button disabled={true} className="flex ml-auto  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">{course.data.is_published ? "Buy Now" : "Comming Soon"}</button>
                                            <button
                                                onClick={handelCart}
                                                className="rounded-full w-10 h-10 bg-indigo-500 hover:bg-indigo-600 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" >
                                                {/* <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg> */}

                                                <svg className="h-6 w-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        : <h3>Course Not Found</h3>

            }

            <div className="md:hidden w-full mx-auto left-0 fixed bottom-0">
                <ButtomNavHome tab="Course Details" />
            </div>
            <Testimonials RatingData={courseRateing} />
            <Footer />
        </>
    )
}

export default CourseDetails