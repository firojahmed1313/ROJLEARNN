import React from 'react'
import Nav from '../Comp/Navber/Nav'
import Footer from '../Comp/Footer/Footer'
import logo from '../assets/images/logo2.webp'
import logo2 from '../assets/images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import TostCon from '../Comp/utlits/TostCon'
//import {Toastify} from '../Comp/utlits/Toastify'
import { ToastContainer, toast } from "react-toastify";
import { postApi } from '../Redux/Api/Api'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const burl = import.meta.env.VITE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formobj = new FormData(e.target);
    const obj = Object.fromEntries(formobj.entries());
    console.log(obj);
    try {
      const data = await postApi(`${burl}/user/register`, obj);
      console.log(data);

      if (typeof (data.data) == 'string') {
        console.warn(data);
      }
      else if (typeof (data.data) == 'object') {
        console.log(data);
        console.log("Successfully registered");
        navigate('/login');
      }
      // if (data.data) {
      //   navigate("/login");
      // }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <Nav />
      <section className="bg-white">
        <div className="lg:grid lg:grid-cols-12  lg:h-[80vh]">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1614064642578-7faacdc6336e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <img className='h-20 w-auto rounded-full' src={logo} alt="logo" />
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to ROJLEARN 🦑
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 "
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <span className="sr-only">Home</span>
                  <img className='h-16 w-auto rounded-full' src={logo2} alt="logo" />
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to ROJLEARN 🦑
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                  quibusdam aperiam voluptatum.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>

                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="profile_picture_url" className="block text-sm font-medium text-gray-700">
                    Profile Picture Url
                  </label>

                  <input
                    type="text"
                    id="profile_picture_url"
                    name="profile_picture_url"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>



                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>

                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="role" className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                    Role
                  </label>
                  <div className='relative z-20'>
                    <select id="role" name="role" className='relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'>
                      <option value='Student' className='dark:bg-dark-2'>Student</option>

                    </select>
                    <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="is_active" className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                    Status
                  </label>
                  <div className='relative z-20'>
                    <select id="is_active" name="is_active" className='relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'>
                      <option value='true' className='dark:bg-dark-2'>True</option>

                    </select>
                    <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
                  </div>
                </div>

                {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company announcements.
                  </span>
                </label>
              </div> */}

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                    and
                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to={"/login"} className="text-gray-700 underline">Log in</Link>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Register