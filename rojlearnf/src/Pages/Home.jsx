import React from 'react'
import Banner from '../Comp/Home/Banner'
import Nav from '../Comp/Navber/Nav'
import FooterHome from '../Comp/Footer/FooterHome'
import Courseall from '../Comp/Home/Courseall'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCourseData } from '../Redux/Features/Course/getCourseSlice'
import { useEffect, useState } from 'react'
import CartColloder from '../Comp/utlits/loder/CartColloder'
import ButtomNavHome from '@/Comp/Navber/ButtomNavHome'


const Home = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.getCourse.course);
  const loading = useSelector((state) => state.getCourse.isLoading);
  const error = useSelector((state) => state.getCourse.error);
  //console.log(course);
  // useEffect(() => {
  //   if (course != null) {
  //     setCourseData(course.data);
  //   }
  // }, [course])


  useEffect(() => {
    dispatch(getCourseData());
  }, []);

  return (
    <>
      <Nav />
      <Banner />
      <section className="flex flex-col justify-center max-w-full min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Course
          </h2>
          <Link to={"/courses"}
            className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
            Explore More
          </Link>
        </div>
        {
          (loading) ? <CartColloder /> :
            <div className="flex -mx-3">
              <div className="w-full max-w-full mb-8 md:w-1/2 mx-4 lg:w-1/3 flex flex-col rounded-md border">
                <img src={course?.data[0]?.thumbnail_url} alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6 bg-white  text">
                    <div>
                      <Link href="#"
                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
                        {course?.data[0]?.category}
                      </Link>
                      <Link href="#"
                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                        {course?.data[0]?.title}
                      </Link>
                      <p className="mb-4">
                        {course?.data[0]?.description}
                      </p>
                    </div>
                    <div>
                      <Link to={`/courses/${course?.data[0]?._id}`}
                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                        More </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full hidden md:flex  max-w-full mb-8 md:w-1/2 mx-4 lg:w-1/3 flex-col rounded-md border">
                <img src={course?.data[1]?.thumbnail_url} alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6 bg-white  text">
                    <div>
                      <Link href="#"
                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">{course?.data[1]?.category}</Link>
                      <Link href="#"
                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                        {course?.data[1]?.title}
                      </Link>
                      <p className="mb-4">
                        {course?.data[1]?.description}
                      </p>
                    </div>
                    <div>
                      <Link to={`/courses/${course?.data[1]?._id}`}
                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                        More </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full hidden lg:flex max-w-full mb-8 sm:w-1/2 mx-4 lg:w-1/3  flex-col rounded-md border">
                <img src={course?.data[2]?.thumbnail_url} alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6 bg-white  text">
                    <div>
                      <Link href="#"
                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">
                        {course?.data[2]?.category}</Link>
                      <Link href="#"
                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                        {course?.data[2]?.title}
                      </Link>
                      <p className="mb-4">
                        {course?.data[2]?.description}
                      </p>
                    </div>
                    <div>
                      <Link to={`/courses/${course?.data[2]?._id}`}
                        className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                        More </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
      </section>
      <div className="md:hidden w-full mx-auto left-0 fixed bottom-0">
        <ButtomNavHome tab="Home"/>
      </div>
      <FooterHome />
    </>
  )
}

export default Home