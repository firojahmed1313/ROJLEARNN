import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
const burl = import.meta.env.VITE_URL;
const token = Cookies.get("ROJLEARN");

const submitAssMarks = async (data) => {
  const token = Cookies.get('ROJLEARN');
  const response = await axios.post(
    `${burl}/submit/marksByTeacher/${data.containid}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return response.data;
};

const SubmitAss = ({ item, data }) => {
  //console.log(item);
  const { mutate, isLoading, error } = useMutation({
    mutationFn: submitAssMarks,
    onSuccess: (data) => {
      //console.log(data);
      toast.success(data, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
    onError: (error) => {
      //console.log("Some Error", error);
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
    },
  });
  const url = item.github_url;
  const url2 = item.deploy_url;
  const marksHandle = (e) => {
    e.preventDefault();
    const fromobj = new FormData(e.target);
    const obj = Object.fromEntries(fromobj.entries());
    const mark = obj.marks;
    const containid = item.assignmentid;
    const userid = item.userid;
    const cuid = item.auid;
    const type = "assignment";
    const data = {
      mark,
      containid,
      userid,
      cuid,
      type
    };
    //console.log(data);
    mutate(data);
  };
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
      <div className="w-[97%] mx-auto my-2 rounded-lg   bg-white shadow-[2px_2px_15px_rgba(0,0,0,0.09)] p-4 space-y-3 relative overflow-hidden  cursor-pointer">
        <ScrollArea className="h-[150px] w-full ">
          <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 pr-4">
            {data?.codequestions}
          </p>
          <div className="w-full bottom-0">
            <div className="flex w-fit mx-auto overflow-hidden rounded-md  bg-white shadow-sm my-4">
              <button onClick={() => window.open(url, '_blank')}
                className="group mr-4 flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
                Code 
                <svg
                    className="w-8 h-8 justify-end bg-sky-500 group-hover:rotate-90 group-hover:bg-sky-200 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-gray-800"
                    ></path>
                  </svg>
              </button>
              {
                url2 && <button onClick={() => window.open(url2, '_blank')}
                  className="group flex mr-4 items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
                  Deploy 
                  <svg
                    className="w-8 h-8 justify-end bg-sky-500 group-hover:rotate-90 group-hover:bg-sky-200 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              }

            </div>
          </div>
        </ScrollArea>
        <div>
          <form
            onSubmit={marksHandle}
            className="mx-auto my-12 max-w-xl sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative text-gray-500 sm:w-7/12">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M10.985 3.165a1 1 0 0 0-1.973-.33l-.86 5.163L3.998 8A1 1 0 1 0 4 10l3.817-.002l-.667 4L3 14a1 1 0 1 0 0 2l3.817-.002l-.807 4.838a1 1 0 1 0 1.973.329l.862-5.167l4.975-.003l-.806 4.84a1 1 0 1 0 1.972.33l.862-5.17L20 15.992a1 1 0 0 0 0-2l-3.819.001l.667-4.001l4.153-.003a1 1 0 0 0-.002-2l-3.817.002l.804-4.827a1 1 0 1 0-1.972-.33l-.86 5.159l-4.975.003zm-1.14 6.832l4.976-.003l-.667 4.001l-4.976.002z"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  name="marks"
                  id="marks"
                  placeholder="Enter Marks"
                  className="w-full cursor-text rounded-xl border-2 py-4 pr-4 pl-10 text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-white transition"
              >
                <span className="group flex w-full items-center justify-center rounded text-center font-medium">
                  Submit Marks
                </span>
                <svg
                  className="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    trokelinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitAss;
