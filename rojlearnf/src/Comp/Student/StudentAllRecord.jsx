import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentReport } from '../../Redux/Features/Report/GetStudentReportSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../Redux/Features/User/UserSlice';

const StudentAllRecord = () => {
    const [tab, setTab] = React.useState("Exam");
    const user = useSelector((state) => state.getUser.user);
    const token = Cookies.get("ROJLEARN");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!token) {
        navigate("/login");
    }
    const studentReport = useSelector((state) => state.getStudentReport.studentReport);
    const loading = useSelector((state) => state.getStudentReport.loading);
    const error = useSelector((state) => state.getStudentReport.error);
    if (loading) {
        console.log("loading");
    }
    if (error) {
        console.log("error");
    }
    console.log(studentReport);

    useEffect(() => {
        setTimeout(() => {
            if (user == null) {
                dispatch(getProfileData(token));
            }

        }, 1000)

    }, [])
    useEffect(() => {
        setTimeout(() => {
            if (!studentReport && user != null) {
                dispatch(getStudentReport(user._id));
            }
        }, 2000)

    }, [])
    return (
        <>
            <div class=" flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[96%] p-2 mx-auto">
                <div class="w-full">
                    <ul class=" flex gap-2 flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-slate-300" data-tabs="tabs" role="list">
                        <li class={`${tab == "Exam" ? "bg-white rounded-lg " : "transition-all ease-in-out"} z-30 flex-auto text-center   `}>
                            <button class="font-semibold flex items-center justify-center w-full px-0 py-2 text-sm mb-0  border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit hover:bg-white"
                                onClick={() => setTab("Exam")}>
                                Exam
                            </button>
                        </li>
                        <li class={`${tab == "Assignment" ? "bg-white rounded-lg " : "transition-all ease-in-out"} z-30 flex-auto text-center   `}>
                            <button class="font-semibold flex items-center justify-center w-full px-0 py-2 mb-0 text-sm  border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit hover:bg-white"
                                onClick={() => setTab("Assignment")}>
                                Assignment
                            </button>
                        </li>
                        <li class={`${tab == "Task" ? "bg-white rounded-lg " : "transition-all ease-in-out"} z-30 flex-auto text-center   `}>
                            <button class="font-semibold flex items-center justify-center w-full px-0 py-2 text-sm mb-0  border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit hover:bg-white"
                                onClick={() => setTab("Task")}>
                                Task
                            </button>
                        </li>
                    </ul>

                    <div  class="p-3">

                        {(tab == "Exam") && <div >
                            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                                Website Review Check Exam
                            </h5>
                            <p class="text-slate-600 leading-normal font-light">
                                Because it&apos;s about motivating the doers. Because I&apos;m
                                here to follow my dreams and inspire other people to follow their
                                dreams, too.
                            </p>
                        </div>}
                        {(tab == "Assignment") && <div >
                            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                                Website Review Check Assignment
                            </h5>
                            <p class="text-slate-600 leading-normal font-light">
                                Because it&apos;s about motivating the doers. Because I&apos;m
                                here to follow my dreams and inspire other people to follow their
                                dreams, too.
                            </p>
                        </div>}
                        {(tab == "Task") && <div >
                            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                                Website Review Check task
                            </h5>
                            <p class="text-slate-600 leading-normal font-light">
                                Because it&apos;s about motivating the doers. Because I&apos;m
                                here to follow my dreams and inspire other people to follow their
                                dreams, too.
                            </p>
                        </div>}
                        
                    </div>
                </div>
            </div>
            <div>StudentAllRecord</div>

        </>
    )
}

export default StudentAllRecord