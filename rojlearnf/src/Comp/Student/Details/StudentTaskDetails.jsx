import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskDetails } from "@/Redux/Features/EATDetailsByid/GetTaskDetailsSlice"
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ButtonGive from '@/Comp/Button/ButtonGive'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
const burl = import.meta.env.VITE_URL;
const submitTask = async (data) => {
  const token = Cookies.get('ROJLEARN');
  const response = await axios.post(`${burl}/submit/submittask/${data.taskid}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response.data;
}
const StudentTaskDetails = () => {
  const [showQuestion, setShowQuestion] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = location.pathname.substring(13);
  console.log(id);
  const token = Cookies.get('ROJLEARN');
  console.log(token);
  const taskDetails = useSelector((state) => state.getTaskById.taskDetails);
  const User = useSelector((state) => state.getUser);
  const isloading = useSelector((state) => state.getTaskById.isLoading);
  const isError = useSelector((state) => state.getTaskById.isError);
  console.log(taskDetails);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    else {

      dispatch(getTaskDetails(id));

    }
  }, [id])
  const { mutate, isLoading, error } = useMutation({
    mutationFn: submitTask,
    onSuccess: (data) => {
        console.log(data);
        toast.success(data, {
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
        toast.error( error.message, {
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
  const handelAnswer = (e) => {
    e.preventDefault();
    setShowQuestion(!showQuestion);
    //console.log("ANS");
    const fromobj = new FormData(e.target);
    const obj = Object.fromEntries(fromobj.entries());
    console.log(obj);
    const taskid= taskDetails._id;
    const userid = User.user._id;
    const tuid = taskid + "_" + userid;
    const {answer}=obj;
    const data = {
      taskid,
      userid,
      tuid,
      answer
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
      {
        (isloading) ?
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
          :
          <div className="items-center flex flex-wrap my-4">
            <div className="hidden lg:block w-full md:w-4/12 ml-auto mr-auto px-4">
              <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="w-[96%] lg:w-5/12 ml-auto mr-auto px-4 mx-auto">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <g fill="none" stroke="#000" trokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                      <path d="M22 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V22" />
                      <path d="M24 34V42" />
                      <path d="M14 42L34 42" />
                      <path fill="#2f88ff" d="M33.3 6C31.4775 6 30 7.43473 30 9.20455C30 12.4091 33.9 15.3223 36 16C38.1 15.3223 42 12.4091 42 9.20455C42 7.43473 40.5225 6 38.7 6C37.5839 6 36.5972 6.53804 36 7.3616C35.4028 6.53804 34.4161 6 33.3 6Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold">{taskDetails?.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  {taskDetails?.descriptions}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path fill="black" fillRule="evenodd" d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2v.07a7 7 0 0 1 2.812 1.058l.908-.908a.75.75 0 1 1 1.06 1.06l-.8.8A7 7 0 1 1 7 2.07V2a1 1 0 0 1-1-1m7.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M8.75 5.75a.75.75 0 0 0-1.5 0v3.56l.22.22l2.254 2.254a.75.75 0 1 0 1.06-1.06L8.75 8.689z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500 font-semibold">
                          Total Duration : {taskDetails?.totalduration} h
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
                            <path fill="black" d="M25.926 28.539V16.117h-3.492c-3.868 0-5.907-2.508-5.907-4.945c0-2.531 1.875-4.031 4.383-4.031c2.883 0 5.133 2.226 5.133 5.953v3.023h3.914v-3.023c0-3.727 2.25-5.953 5.133-5.953c2.508 0 4.406 1.5 4.406 4.03c0 2.438-2.11 4.946-5.93 4.946h-3.492V28.54h16.524c2.554 0 3.937-.984 3.937-3.492V19.61c0-2.484-1.383-3.492-3.937-3.492h-5.461c1.453-1.312 2.32-3.094 2.32-5.11c0-4.523-3.586-7.78-8.133-7.78c-3.375 0-6.117 1.874-7.312 5.203c-1.196-3.328-3.961-5.203-7.336-5.203c-4.524 0-8.133 3.257-8.133 7.78c0 2.016.844 3.798 2.32 5.11h-5.46c-2.415 0-3.938 1.008-3.938 3.492v5.438c0 2.508 1.406 3.492 3.937 3.492Zm0 24.234V31.047H8.816V46.82c0 3.914 2.297 5.953 6.211 5.953Zm4.148-21.726v21.726h10.899c3.914 0 6.21-2.039 6.21-5.953V31.047Z" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500 font-semibold"> Total Marks : {taskDetails?.totalmarks}</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="black" d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z" />
                        </svg></span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500 font-semibold"> Total Questions : {taskDetails?.totalquestions}</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {
                (!showQuestion) ?
                  <ButtonGive title="Start Task" colore="before:bg-pink-300" hander={() => setShowQuestion(!showQuestion)} /> : null

              }
              <div className={`${showQuestion ? "" : "hidden"}`}>
                <h3 className="text-lg mt-4 font-bold">Question:</h3>
                <h5 className="text-lg mt-4 font-bold">{taskDetails?.taskquestions}</h5>
                <div className="col-span-full mt-4">
                  <form onSubmit={handelAnswer}>
                    <label
                      htmlFor="answer"
                      className="text-lg font-bold text-gray-900 block mb-2"
                    >
                      Answer :
                    </label>
                    <textarea
                      id="answer"
                      name="answer"
                      rows="6"
                      className="bg-gray-50 border my-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                      placeholder="Answer"
                    ></textarea>
                    <ButtonGive title="Submit" colore="before:bg-pink-300" />

                  </form>
                </div>

              </div>
            </div>
          </div>}
    </>
  )
}

export default StudentTaskDetails