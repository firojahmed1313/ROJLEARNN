import { getCommentsDetails } from '@/Redux/Features/Activity/Details/getCommentsDetailsSlice';
import { getFeedbackDetails } from '@/Redux/Features/Activity/Details/getFeedbackDetailsSlice';
import { getLikeDetails } from '@/Redux/Features/Activity/Details/getLikeDetailsSlice';
import { getRatingDetails } from '@/Redux/Features/Activity/Details/getRatingDetailsSlice';
import { getTrackingDetails } from '@/Redux/Features/Activity/Details/getTrackingDetailsSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ActivityTable = ({ type, data }) => {
    const [activityData, setActivityData] = React.useState(data);
    const commentsDetails = useSelector((state) => state.getCommentsDetails.commentsDetails);
    const feedbackDetails = useSelector((state) => state.getFeedbackDetails.feedbackDetails);
    const likeDetails = useSelector((state) => state.getLikeDetails.likeDetails);
    const ratingDetails = useSelector((state) => state.getRatingDetails.ratingDetails);
    const trackingDetails = useSelector((state) => state.getTrackingDetails.trackingDetails);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!data) {
            //console.log("data not found");
        }
        else {
            if (type === "comments") {
                if (!commentsDetails) {
                    dispatch(getCommentsDetails(data));
                }
                setActivityData(commentsDetails);
            }
            else if (type === "like") {
                if (!likeDetails) {
                    dispatch(getLikeDetails(data));
                }
                setActivityData(likeDetails);
            }
            else if (type === "rating") {
                if (!ratingDetails) {
                    dispatch(getRatingDetails(data));
                }
                setActivityData(ratingDetails);
            }
            else if (type === "feedback") {
                if (!feedbackDetails) {
                    dispatch(getFeedbackDetails(data));
                }
                setActivityData(feedbackDetails);
            }
            else if (type === "tracking") {
                if (!trackingDetails) {
                    dispatch(getTrackingDetails(data));
                }
                setActivityData(trackingDetails);
            }
        }
    }, [commentsDetails, likeDetails, ratingDetails, feedbackDetails, trackingDetails, data]);
    //console.log(activityData);
    return (
        <div className="flex flex-col my-2 mx-3 shadow-xl shadow-slate-400">
            <div className=" overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                    {/* {<div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                        <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none ">
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </div>
                        <input type="text" id="default-search" className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" placeholder="Search for company" />
                    </div>} */}
                    <div className="overflow-hidden ">
                        <table className=" min-w-full rounded-xl ">
                            <thead>
                                <tr className=" bg-blue-700 shadow-inner ">
                                    <th scope="col" className="p-5 shadow-inner shadow-blue-900 text-center text-lg  leading-6 font-bold text-white capitalize rounded-l-2xl"> Title </th>
                                    <th scope="col" className="p-5 shadow-inner shadow-blue-900 text-center text-lg  leading-6 font-bold text-white capitalize"> Descriptions </th>
                                    <th scope="col" className="p-5 shadow-inner shadow-blue-900 text-center text-lg  leading-6 font-bold text-white capitalize"> Type </th>
                                    <th scope="col" className="p-5 shadow-inner shadow-blue-900 text-center text-lg  leading-6 font-bold text-white capitalize"> Status/Message </th>
                                    <th scope="col" className="p-5 shadow-inner shadow-blue-900 text-center text-lg  leading-6 font-bold text-white capitalize"> Date </th>
                                    <th scope="col" className="p-5 shadow-inner shadow-blue-900 text-center text-lg  leading-6 font-bold text-white capitalize rounded-r-2xl"> Actions </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300 ">
                                {
                                    (activityData === null) ? <div className="text-center py-4">Loading...</div> :
                                        (activityData?.map((data, index) => {
                                            return <tr className="bg-white transition-all duration-500 hover:bg-gray-300 " key={index}>
                                                <td className="p-5 whitespace-nowrap text-center text-sm leading-6 font-medium text-gray-900 " title={data?.contain?.title}> {data?.contain?.title?.substring(0, 20)}...</td>
                                                <td className="p-5 whitespace-nowrap text-center text-sm leading-6 font-medium text-gray-900" title={data?.contain?.descriptions}> {data?.contain?.descriptions?.substring(0, 16)}... </td>
                                                <td className="p-5 whitespace-nowrap text-center text-sm leading-6 font-medium text-gray-900 ">
                                                    {
                                                        (data?.data?.type?.toUpperCase()) === "TASK" && <span className="py-2 px-4 rounded-full text-white bg-blue-600  flex items-center justify-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                                <g fill="none" fill-rule="evenodd">
                                                                    <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                                    <path fill="#fff" d="M15 2a2 2 0 0 1 1.732 1H18a2 2 0 0 1 2 2v12a5 5 0 0 1-5 5H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.268A2 2 0 0 1 9 2zm-.176 7.379l-4.242 4.243l-1.415-1.415a1 1 0 0 0-1.414 1.414l2.05 2.051a1.1 1.1 0 0 0 1.556 0l4.88-4.879a1 1 0 1 0-1.415-1.414M14.5 4h-5a.5.5 0 0 0-.492.41L9 4.5v1a.5.5 0 0 0 .41.492L9.5 6h5a.5.5 0 0 0 .492-.41L15 5.5v-1a.5.5 0 0 0-.41-.492z" />
                                                                </g>
                                                            </svg>
                                                            {data?.data?.type?.toUpperCase()}
                                                        </span>}
                                                    {(data?.data?.type?.toUpperCase()) === "EXAM" && <span className="py-2 px-4 rounded-full text-white bg-blue-600  flex items-center justify-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
                                                            <g fill="#fff">
                                                                <path d="M20 18.6L17.75 24h4.5z" />
                                                                <path fill-rule="evenodd" d="M38 15L28 4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4zm-18 0a1 1 0 0 1 .923.615l5 12a1 1 0 0 1-1.846.77L23.083 26h-6.166l-.994 2.385a1 1 0 0 1-1.846-.77l5-12A1 1 0 0 1 20 15m-5 17a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m17-15a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2zM28 7l7 8h-6a1 1 0 0 1-1-1z" clip-rule="evenodd" />
                                                                <path fill-rule="evenodd" d="M25.923 27.614v.001q.043.104.062.209a3 3 0 0 1-1.2-.8q-.086.018-.17.053a1 1 0 0 0-.538 1.306L23.083 26h-6.166l-.994 2.384a1 1 0 0 1-1.846-.769l.993-2.384l4.007-9.616a1 1 0 0 1 1.846 0l.923 2.214v.002l2.25 5.4v.001zm-.077-5.384l-3.077-7.384a3 3 0 0 0-5.538 0l-5 12A3 3 0 0 0 12 27.93V8a2 2 0 0 1 2-2h12.268c-.172.298-.268.64-.268 1v7a3 3 0 0 0 3 3h6a2 2 0 0 0 1-.268V25a3 3 0 0 0-3-3a3 3 0 1 0-6 0a3 3 0 0 0-1.154.23m.77 1.847A1 1 0 0 0 27 26h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 1 0-2 0v2h-2a1 1 0 0 0-.385.077m.884 5.582q.12.18.264.341h-.527q.144-.162.263-.341m-5.27-.505c.134.319.315.602.533.846zm.533.846h-5.526c.218-.244.4-.527.532-.846L18.25 28h3.5l.48 1.154M13.34 30.5A3 3 0 0 1 12 28.067V33c0-1.043.533-1.962 1.34-2.499m-.576 4.5a3 3 0 0 1-.764-2V37c0-.768.29-1.468.764-1.999m19.472-5c.475-.53.764-1.232.764-2a3 3 0 0 0 3-3v8a3 3 0 0 0-3-3zm-2.407 6H33a3 3 0 0 0 3-3v7a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-2.999A3 3 0 0 0 15 40h12a3 3 0 0 0 2.83-4m-2.826-2H33a1 1 0 1 0 0-2H15a1 1 0 1 0 0 2h12.003M38 15v25a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h14zM28 7l7 8h-6a1 1 0 0 1-1-1zm-5.75 17h-4.5L20 18.6zm1.827 4.385v-.002zM15 36a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" clip-rule="evenodd" />
                                                            </g>
                                                        </svg>
                                                        {data?.data?.type?.toUpperCase()}
                                                    </span>}
                                                    {(data?.data?.type?.toUpperCase()) === "ASSIGNMENT" && <span className="py-2 px-4 rounded-full text-white bg-blue-600  flex items-center justify-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                            <path fill="#fff" d="M17.75 2.001a2.25 2.25 0 0 1 2.245 2.096L20 4.25v10.128q-.181.12-.341.28l-3.409 3.408l-.908-.91a2.24 2.24 0 0 0-1.5-.657h2.408a.75.75 0 1 0 0-1.5h-5.004a.75.75 0 0 0 0 1.5h2.413a2.25 2.25 0 0 0-1.5 3.839l1.659 1.66H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.251a2.25 2.25 0 0 1 2.096-2.245l.154-.005zM9 7.751a1 1 0 1 0-2 0a1 1 0 0 0 2 0M11.246 7a.75.75 0 0 0 0 1.5h5.004a.75.75 0 1 0 0-1.5zm-.75 4.75c0 .414.336.75.75.75h5.004a.75.75 0 1 0 0-1.5h-5.004a.75.75 0 0 0-.75.75M9 11.75a1 1 0 1 0-2 0a1 1 0 0 0 2 0m0 3.998a1 1 0 1 0-2 0a1 1 0 0 0 2 0m7.25 4.441l4.47-4.47a.75.75 0 1 1 1.06 1.061l-5 5l-.051.047a.75.75 0 0 1-1.01-.047l-2.5-2.501a.75.75 0 0 1 1.062-1.06z" />
                                                        </svg>
                                                        {data?.data?.type?.toUpperCase()}
                                                    </span>}
                                                    {(data?.data?.type?.toUpperCase()) === "COURSES" && <span className="py-2 px-2 rounded-full text-white bg-blue-600 flex items-center justify-center gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="2.21em" height="2em" viewBox="0 0 1696 1536">
                                                            <path fill="#fff" d="M1671 350q40 57 18 129l-275 906q-19 64-76.5 107.5T1215 1536H292q-77 0-148.5-53.5T44 1351q-24-67-2-127q0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5T84 1051q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5T372 283q1-8-3-25.5t-2-26.5q2-8 9-18t18-23t17-21q8-12 16.5-30.5t15-35t16-36t19.5-32T504.5 12t36-11.5T588 6l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5T1057 1280H188q-27 0-38 15q-11 16-1 43q24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57q38 15 59 43m-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1279 352l21-64q4-13-2-22.5t-20-9.5H670q-13 0-25.5 9.5T628 288zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1196 608l21-64q4-13-2-22.5t-20-9.5H587q-13 0-25.5 9.5T545 544z" />
                                                        </svg>
                                                        {data?.data?.type?.toUpperCase()}
                                                    </span>

                                                    }
                                                </td>
                                                <td className={`p-5 whitespace-nowrap text-center  text-sm leading-6 font-medium text-gray-900`} title={(data?.data?.comment_text) ? data?.data?.comment_text : (data?.data?.feedback_text) ? data?.data?.feedback_text : data?.data?.message}>
                                                    {(data?.data?.liketype === "Like") ? 
                                                    <span className=" items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512">
                                                        <path fill="#1a19cc" d="M2.5 209.1C1 221.1 0 233.3 0 245.7c0 109 59.7 203.9 148.1 254.2l16.5-34.8V227.4l-18.3-18.3zM512 227.4c0-18.3-18.3-36.6-36.6-36.6H329.1c9.1-36.6 18.3-73.1 18.3-91.4c0-36.6-18.3-73.1-27.4-82.3c-.2-.2-9.1-9.1-27.4-9.1c-27.4 0-27.4 27.4-27.4 27.4c0 .5-9.1 45.7-9.1 64s-36.6 91.4-54.9 109.7l-18.3 9.1v256l18.3 9.1h201.1c36.6 0 54.9-18.3 54.9-36.6s-18.3-36.6-36.6-36.6c36.6 0 54.9-18.3 54.9-36.6s-18.3-36.6-36.6-36.6c36.6 0 54.9-18.3 54.9-36.6s-18.3-36.6-36.6-36.6c36.5.3 54.8-18 54.8-36.3" />
                                                    </svg></span>
                                                     : ""}{(data?.data?.liketype === "Dislike") ? <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3m" viewBox="0 0 512 512">
                                                        <path fill="#1a19cc" d="M109.7 28.5c-36.6 0-54.9 18.3-54.9 36.6s18.3 36.6 36.6 36.6c-36.6 0-54.9 18.3-54.9 36.6s18.3 36.6 36.6 36.6c-36.6 0-54.9 18.3-54.9 36.6S36.6 248 54.9 248C18.3 248 0 266.2 0 284.5s18.3 36.6 36.6 36.6h146.3c-9.1 36.6-18.3 73.1-18.3 91.4c0 36.6 18.3 73.1 27.4 82.3c.2.2 9.1 9.1 27.4 9.1c27.4 0 27.4-27.4 27.4-27.4c0-.5 9.1-45.7 9.1-64s36.6-91.4 54.9-109.7l18.3-9.1v-256l-18.3-9.1H109.7zM363.9 12l-16.5 34.8v237.7l18.3 18.3h143.8c1.5-12 2.5-24.2 2.5-36.6C512 157.3 452.3 62.4 363.9 12" />
                                                    </svg> : ""}
                                                    {data?.data?.comment_text?.substring(0, 16)}
                                                    <span className="flex items-center gap-1">
                                                        {(data?.data?.rating) ?
                                                            Array.from(Array(data?.data?.rating)).map((_, index) => (
                                                                <div key={index}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                                        <path fill="#1a19cc" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" />
                                                                        <path fill="#1a19cc" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity="0.5" />
                                                                    </svg>
                                                                </div>
                                                            )) : ""}

                                                        {(data?.data?.rating) ? " - " : ""}{data?.data?.message?.substring(0, 12)}</span>
                                                    {data?.data?.feedback_text?.substring(0, 16)}
                                                    <span className={` ${data?.data?.status === "COMPLETED" ? "text-green-600" : "text-red-600"} `}>
                                                        {data?.data?.status}</span>
                                                </td>
                                                <td className="p-5 whitespace-nowrap text-center text-sm leading-6 font-medium text-gray-900"> {data?.data?.created_at?.substring(0, 10)} </td>
                                                <td className=" p-5 ">
                                                    <div className="flex items-center gap-1">
                                                        <button disabled={true} className="p-2  rounded-full  group transition-all duration-500  flex item-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path fill="#554af2" d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6zM13 3v2h4.586l-7.793 7.793l1.414 1.414L19 6.414V11h2V3z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        }))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityTable