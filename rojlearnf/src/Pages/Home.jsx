import React from 'react'
import Banner from '../Comp/Home/Banner'
import Nav from '../Comp/Navber/Nav'
import FooterHome from '../Comp/Footer/FooterHome'
import Courseall from '../Comp/Home/Courseall'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />      
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Course
          </h2>
          <Link href="#"
            className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
            Explore More
          </Link>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full mb-8 sm:w-1/2 mx-4 lg:w-1/3 flex flex-col rounded-md border">
            <img src="https://images.unsplash.com/photo-1711349172514-3f11275bfbb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card img" className="object-cover object-center w-full h-48 rounded-md" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white  text">
                <div>
                  <Link href="#"
                    className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Reliable
                    Schemas</Link>
                  <Link href="#"
                    className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                    What Zombies Can Teach You About Food
                  </Link>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi
                    aperiam, amet cupiditate?
                  </p>
                </div>
                <div>
                  <Link href="#"
                    className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHome />
    </>
  )
}

export default Home