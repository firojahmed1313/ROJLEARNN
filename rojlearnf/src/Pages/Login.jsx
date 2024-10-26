import React, { useEffect } from 'react'
import Nav from '../Comp/Navber/Nav'
import Footer from '../Comp/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Features/Credentials/LoginSlice';
import { getProfileData } from '../Redux/Features/User/UserSlice';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const burl = import.meta.env.VITE_URL;
const loginUser = async ({ email, password }) => {
  const response = await axios.post(`${burl}/user/logIn`, 
    { email, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
  );
  return response.data;
};
const Login = () => {
  
  console.log(burl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      Cookies.set('ROJLEARN', data, {
        expires: 1,
        sameSite: 'strict',
        secure: true,
        path: '/',
      });
      console.log('Login successful:', data);
      dispatch(getProfileData(data));
      toast.success(`Login successful `, {
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
    
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    const fromobj = new FormData(e.target);
    const obj = Object.fromEntries(fromobj.entries());
    const email = obj.email;
    const password = obj.password;
    mutate({ email, password });
    console.log(email, password);
  }
  const User = useSelector((state) => state.getUser);
  

  console.log(User);

  useEffect(() => {
    if(User.isLoading){
      console.log("loading");
    }
    else if (User.isError) {
      console.log("error");
    }
  })
  useEffect(() => {
    if (User.user?.role === "Student") {
      setTimeout(() => {
        navigate("/student");
      }, 3000)
      
    }
    else if (User.user?.role === "Instructor") {
      setTimeout(() => {
        navigate("/teacher");
      }, 3000)
    }
  }, [User])
  
  if(isError){
    console.log(error);
    toast.error("Login failed plz chack your email and password", {
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
  if(isLoading){
    console.log("loading");
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
      <div className="h-[80vh] w-screen flex justify-center items-center dark:bg-gray-900">
        <div className="grid gap-8">
          
          <div
            id="back-div"
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-2"
          >
            <div
              className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-6 2xl:p-6 lg:p-5 md:p-10 sm:p-2 m-1"
            >
              <h1 className="pt-1 pb-3 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                Log in
              </h1>
              <form onSubmit={handelSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2  dark:text-gray-400 text-lg">Email</label>
                  <input
                    id="email"
                    name="email"
                    className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                  <input
                    id="password"
                    name="password"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="#"
                >
                  <span
                    className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    Forget your password?
                  </span>
                </a>
                <button
                  className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                  type="submit"
                >
                  LOG IN
                </button>
              </form>
              <div className="flex flex-col mt-4 items-center justify-center text-sm">
                <h3 className="dark:text-gray-300">
                  Don't have an account?
                  <Link
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    to={"/register"}
                  >
                    <span
                      className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Sign Up
                    </span>
                  </Link>
                </h3>
              </div>
              {//<!-- Third Party Authentication Options -->
              }
              <div
                id="third-party-auth"
                className="flex items-center justify-center mt-5 flex-wrap"
              >
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                    alt="Linkedin"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px] filter dark:invert"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="Github"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                    alt="Facebook"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px] dark:gray-100"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    alt="twitter"
                  />
                </button>

                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                    alt="apple"
                  />
                </button>
              </div>

              <div
                className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
              >
                <p className="cursor-default">
                  By signing in, you agree to our
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span
                      className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Terms
                    </span>
                  </a>
                  and
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span
                      className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Privacy Policy
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login