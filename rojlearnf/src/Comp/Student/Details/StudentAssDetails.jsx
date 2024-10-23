import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getAssignmentDetails } from '@/Redux/Features/EATDetailsByid/GetAssignmentDetailsSlice'
import ButtonGive from '@/Comp/Button/ButtonGive'


const StudentAssDetails = () => {
  const [showQuestion, setShowQuestion] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = location.pathname.substring(19);
  console.log(id);
  const token = Cookies.get('ROJLEARN');
  console.log(token);
  const assignmentDetails = useSelector((state) => state.getAssignmentById.assignmentDetails);
  console.log(assignmentDetails);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    else {

      dispatch(getAssignmentDetails(id));

    }
  }, [id])
  const handelAnswer = (e) => {
    e.preventDefault();
    setShowQuestion(!showQuestion);
    //console.log("ANS");
    const fromobj = new FormData(e.target);
    const obj = Object.fromEntries(fromobj.entries());
    console.log(obj);
  }
  return (
    <>
      <div className="items-center flex flex-wrap my-4">
        <div className="hidden lg:block w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyfGVufDB8MXwwfHx8Mg%3D%3D" />
        </div>
        <div className="w-[96%] lg:w-5/12 ml-auto mr-auto px-4 mx-auto">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-500 mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <g fill="none" stroke="#000" trokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                  <path d="M22 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V22" />
                  <path d="M24 34V42" />
                  <path d="M14 42L34 42" />
                  <path fill="#2f88ff" d="M33.3 6C31.4775 6 30 7.43473 30 9.20455C30 12.4091 33.9 15.3223 36 16C38.1 15.3223 42 12.4091 42 9.20455C42 7.43473 40.5225 6 38.7 6C37.5839 6 36.5972 6.53804 36 7.3616C35.4028 6.53804 34.4161 6 33.3 6Z" />
                </g>
              </svg>
            </div>
            <h3 className="text-3xl font-semibold">{assignmentDetails?.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              {assignmentDetails?.descriptions}
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-emerald-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                        <path fill="black" fillRule="evenodd" d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2v.07a7 7 0 0 1 2.812 1.058l.908-.908a.75.75 0 1 1 1.06 1.06l-.8.8A7 7 0 1 1 7 2.07V2a1 1 0 0 1-1-1m7.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M8.75 5.75a.75.75 0 0 0-1.5 0v3.56l.22.22l2.254 2.254a.75.75 0 1 0 1.06-1.06L8.75 8.689z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500 font-semibold">
                      Total Duration : {assignmentDetails?.totalduration} h
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-pink-600 bg-emerald-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
                        <path fill="black" d="M25.926 28.539V16.117h-3.492c-3.868 0-5.907-2.508-5.907-4.945c0-2.531 1.875-4.031 4.383-4.031c2.883 0 5.133 2.226 5.133 5.953v3.023h3.914v-3.023c0-3.727 2.25-5.953 5.133-5.953c2.508 0 4.406 1.5 4.406 4.03c0 2.438-2.11 4.946-5.93 4.946h-3.492V28.54h16.524c2.554 0 3.937-.984 3.937-3.492V19.61c0-2.484-1.383-3.492-3.937-3.492h-5.461c1.453-1.312 2.32-3.094 2.32-5.11c0-4.523-3.586-7.78-8.133-7.78c-3.375 0-6.117 1.874-7.312 5.203c-1.196-3.328-3.961-5.203-7.336-5.203c-4.524 0-8.133 3.257-8.133 7.78c0 2.016.844 3.798 2.32 5.11h-5.46c-2.415 0-3.938 1.008-3.938 3.492v5.438c0 2.508 1.406 3.492 3.937 3.492Zm0 24.234V31.047H8.816V46.82c0 3.914 2.297 5.953 6.211 5.953Zm4.148-21.726v21.726h10.899c3.914 0 6.21-2.039 6.21-5.953V31.047Z" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500 font-semibold"> Total Marks : {assignmentDetails?.totalmarks}</h4>
                  </div>
                </div>
              </li>

            </ul>
          </div>
          {
            (!showQuestion) ?
              <ButtonGive title="Start Assignment" colore="before:bg-emerald-400" hander={() => setShowQuestion(!showQuestion)} /> : null

          }
          <div className={`${showQuestion ? "" : "hidden"}`}>
            <h3 className="text-lg mt-4 font-bold">Assignment Question:</h3>
            <h5 className="text-lg mt-4 font-bold">{assignmentDetails?.codequestions}</h5>
            <div className="col-span-full mt-4">
              <h3 className="text-lg my-4 font-bold">Assignment Answer:</h3>
              <form onSubmit={handelAnswer} >
                <div className='border-2 border-emerald-400 rounded-lg p-4'>
                  <div>
                    <label htmlFor="github_url" className="block text-lg font-semibold mb-2 dark:text-white">Answer URL</label>
                    <div className="relative mb-4">
                      <input type="text" id="github_url" name="github_url" className="py-3 px-4 ps-16 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="www.example.com" />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <span className="text-sm text-gray-500 dark:text-neutral-500">http://</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="deploy_url" className="block text-lg font-semibold mb-2 dark:text-white">Deploy URL if Needed</label>
                    <div className="relative mb-4">
                      <input type="text" id="deploy_url" name="deploy_url" className="py-3 px-4 ps-16 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="www.example.com" />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <span className="text-sm text-gray-500 dark:text-neutral-500">http://</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonGive title="Submit" colore="before:bg-emerald-400" />
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default StudentAssDetails