import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.svg"
import { useSelector } from 'react-redux'
const nData = [

  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'All Courses',
    path: '/courses',
  },
  {
    id: 3,
    title: 'teacher',
    path: '/teacher',
  },
  {
    id: 4,
    title: 'Students',
    path: '/student',
  }
]
const Nav = () => {
  const isAuth = useSelector((state) => state.getUser.isAuth);
  const user = useSelector((state) => state.getUser.user);
  const role = user?.role;

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-300" to={"/"}>
              <span className="sr-only">Home</span>
              <img className=" h-20 w-auto" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="relative">
            <label htmlFor="Search" className="sr-only"> Search </label>

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" className="text-gray-600 hover:text-gray-700">
                <span className="sr-only">Search</span>

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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div className="md:flex md:items-center md:gap-12 ml-5 lg:ml-8">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {
                  (nData.map((data) => {
                    return (
                      <li key={data.id}>
                        <Link to={data.path} className="text-gray-500 px-3 py-2 hover:border rounded-xl transition hover:text-white hover:bg-stone-700 dark:text-white dark:hover:text-white/75">
                          {data.title}
                        </Link>
                      </li>
                    )
                  }))
                }
              </ul>
            </nav>
            {
              (!isAuth) ?
                <>
                  <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                      <Link
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500 hover:bg-slate-600"
                        to={"/login"}
                      >
                        Login
                      </Link>

                      <div className="hidden sm:flex">
                        <Link
                          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 hover:bg-slate-600"
                          to={"/register"}
                        >
                          Register
                        </Link>
                      </div>
                    </div>

                    <div className="block md:hidden">
                      <button
                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>:
                <>

                  <div className="flex items-center gap-4">
                    <Link
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500 hover:bg-slate-600"
                      to={(role === "Student") ? "/student" : "/teacher"}
                    >
                      Profile
                    </Link>
                    
                  </div>
                </>
              }

          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav