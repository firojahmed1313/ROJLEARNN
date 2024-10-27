import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getExamDetails } from "@/Redux/Features/EATDetailsByid/GetExamDetailsSlice";
import { useEffect } from "react";
import ButtonGive from "@/Comp/Button/ButtonGive";
import { getQuestioninExam } from "@/Redux/Features/Assignment/getQuestioninExamSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";



const submitExam = async ({data,id}) => {
  console.log(id);
  const burl = import.meta.env.VITE_URL;
  const token = Cookies.get("ROJLEARN");
  const response = await axios.post(`${burl}/submit/submitExam/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response.data;
}
const StuExamDetails = () => {
  const [showQuestion, setShowQuestion] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = location.pathname.substring(13);
  console.log(id);
  const token = Cookies.get("ROJLEARN");
  console.log(token);
  const examDetails = useSelector((state) => state.getExamById.examDetails);
  const isloading = useSelector((state) => state.getExamById.isLoading);
  const isError = useSelector((state) => state.getExamById.isError);
  console.log(examDetails); //.questions //._id
  useEffect(() => {
    if (examDetails) {
      dispatch(getQuestioninExam(examDetails.questions));
    }
  }, []);
  const questioninExam = useSelector(
    (state) => state.getQuestionsinExam.questioninExam
  );
  console.log(questioninExam);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(getExamDetails(id));
    }
  }, [id]);
  const { mutate, isLoading, error } = useMutation({
    mutationFn: submitExam,
    onSuccess: (data) => {
      console.log('Submit Exam successful:', data);

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
  const handelAnswer = (e) => {
    e.preventDefault();
    setShowQuestion(!showQuestion);
    //console.log("ANS");
    const fromobj = new FormData(e.target);
    const obj = Object.fromEntries(fromobj.entries());
    console.log(obj);
    const data = [];
    for (const [key, ans] of Object.entries(obj)) {
      let _id = key.substring(6, key.length);
      data.push({ _id, ans });
    }
    console.log(data);
    const id = examDetails._id;
    mutate({data,id});


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
      {isloading ? (
        <div class="flex items-center justify-center h-screen">
          <div class="relative">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="items-center flex flex-wrap my-4">
            <div className="hidden lg:block w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="w-[96%] lg:w-5/12 ml-auto mr-auto px-4 mx-auto">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-sky-300 mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="#000"
                      trokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path d="M22 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V22" />
                      <path d="M24 34V42" />
                      <path d="M14 42L34 42" />
                      <path
                        fill="#2f88ff"
                        d="M33.3 6C31.4775 6 30 7.43473 30 9.20455C30 12.4091 33.9 15.3223 36 16C38.1 15.3223 42 12.4091 42 9.20455C42 7.43473 40.5225 6 38.7 6C37.5839 6 36.5972 6.53804 36 7.3616C35.4028 6.53804 34.4161 6 33.3 6Z"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="text-sky-600 text-lg font-semibold">
                  {examDetails?.questiontype?.toUpperCase()}
                </h2>
                <h3 className="text-3xl font-semibold">{examDetails?.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  {examDetails?.descriptions}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-sky-200 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="black"
                              fillRule="evenodd"
                              d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2v.07a7 7 0 0 1 2.812 1.058l.908-.908a.75.75 0 1 1 1.06 1.06l-.8.8A7 7 0 1 1 7 2.07V2a1 1 0 0 1-1-1m7.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M8.75 5.75a.75.75 0 0 0-1.5 0v3.56l.22.22l2.254 2.254a.75.75 0 1 0 1.06-1.06L8.75 8.689z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500 font-semibold">
                          Total Duration : {examDetails?.totalduration} h
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-sky-200 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 56 56"
                          >
                            <path
                              fill="black"
                              d="M25.926 28.539V16.117h-3.492c-3.868 0-5.907-2.508-5.907-4.945c0-2.531 1.875-4.031 4.383-4.031c2.883 0 5.133 2.226 5.133 5.953v3.023h3.914v-3.023c0-3.727 2.25-5.953 5.133-5.953c2.508 0 4.406 1.5 4.406 4.03c0 2.438-2.11 4.946-5.93 4.946h-3.492V28.54h16.524c2.554 0 3.937-.984 3.937-3.492V19.61c0-2.484-1.383-3.492-3.937-3.492h-5.461c1.453-1.312 2.32-3.094 2.32-5.11c0-4.523-3.586-7.78-8.133-7.78c-3.375 0-6.117 1.874-7.312 5.203c-1.196-3.328-3.961-5.203-7.336-5.203c-4.524 0-8.133 3.257-8.133 7.78c0 2.016.844 3.798 2.32 5.11h-5.46c-2.415 0-3.938 1.008-3.938 3.492v5.438c0 2.508 1.406 3.492 3.937 3.492Zm0 24.234V31.047H8.816V46.82c0 3.914 2.297 5.953 6.211 5.953Zm4.148-21.726v21.726h10.899c3.914 0 6.21-2.039 6.21-5.953V31.047Z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500 font-semibold">
                          {" "}
                          Total Marks : {examDetails?.totalmarks}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-sky-200 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="black"
                              d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500 font-semibold">
                          {" "}
                          Total Questions : {examDetails?.totalquestions}
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {!showQuestion ? (
                <ButtonGive
                  title="Start Exam"
                  colore="before:bg-sky-300"
                  hander={() => setShowQuestion(!showQuestion)}
                />
              ) : null}
            </div>
          </div>
          <div className={`${showQuestion ? "" : "hidden"}`}>
            <h3 className="text-lg mt-4 font-bold">Question:</h3>
            {/* <h5 className="text-lg mt-4 font-bold">{taskDetails?.taskquestions}</h5> */}
            <div className=" mt-4">
              <form onSubmit={handelAnswer}>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 w-[98%] mx-auto border-2 py-3">
                  {questioninExam?.map((item, index) => {
                    return (
                      <div class="bg-white w-[96%]  mx-auto rounded-md pb-2 shadow-lg ">
                        <p class="bg-teal-700 px-4 py-3 text-white font-bold rounded-t-md">
                          {item?.question}
                        </p>
                        <div class="flex flex-col w-full gap-3 py-3 pb-2 px-2 relative">
                          <div class="relative w-full h-8">
                            <input
                              type="checkbox"
                              id="tennis"
                              name={`answer${item?._id}`}
                              value="option1"
                              class="appearance-none rounded-lg bg-gray-100 cursor-pointer h-full w-full   checked:bg-teal-400 transition-all duration-200  checked:hover:bg-teal-400 hover:bg-gray-200   peer"
                            />
                            <label
                              for="tennis"
                              class="absolute top-[50%] left-3 text-gray-400   -translate-y-[50%] peer-checked:text-gray-100 transition-all duration-200 select-none"
                            >
                              {item?.option1}
                            </label>
                          </div>
                          <div class="relative w-full h-8">
                            <input
                              type="checkbox"
                              id="tennis"
                              name={`answer${item?._id}`}
                              value="option2"
                              class="appearance-none rounded-lg bg-gray-100 cursor-pointer h-full w-full 
                                      checked:bg-teal-400 transition-all duration-200  checked:hover:bg-teal-400 hover:bg-gray-200   peer"
                            ></input>
                            <label
                              for="tennis"

                              class="absolute top-[50%] left-3 text-gray-400   -translate-y-[50%]
                                       peer-checked:text-gray-100 transition-all duration-200 select-none
                                  "
                            >
                              {item?.option2}
                            </label>
                          </div>
                          <div class="relative w-full h-8">
                            <input
                              type="checkbox"
                              id="tennis"
                              name={`answer${item?._id}`}
                              value="option3"
                              class="appearance-none rounded-lg bg-gray-100 cursor-pointer h-full w-full 
                                      checked:bg-teal-400 transition-all duration-200  checked:hover:bg-teal-400 hover:bg-gray-200   peer"
                            ></input>
                            <label
                              for="tennis"
                              class="absolute top-[50%] left-3 text-gray-400   -translate-y-[50%]
                                       peer-checked:text-gray-100 transition-all duration-200 select-none
                                  "
                            >
                              {item?.option3}
                            </label>
                          </div>
                          <div class="relative w-full h-8">
                            <input
                              type="checkbox"
                              id="tennis"
                              name={`answer${item?._id}`}
                              value="option4"
                              class="appearance-none rounded-lg bg-gray-100 cursor-pointer h-full w-full 
                                      checked:bg-teal-400 transition-all duration-200  checked:hover:bg-teal-400 hover:bg-gray-200   peer"
                            ></input>
                            <label
                              for="tennis"
                              class="absolute top-[50%] left-3 text-gray-400   -translate-y-[50%]
                                       peer-checked:text-gray-100 transition-all duration-200 select-none
                                  "
                            >
                              {item?.option4}
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <ButtonGive title="Submit" colore="before:bg-sky-300" />
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StuExamDetails;
