import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentReport } from '../../Redux/Features/Report/GetStudentReportSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../Redux/Features/User/UserSlice';
import TopFive from './Result/TopFive'
import ReportTable from './Result/ReportTable'

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
        //console.log("loading");
    }
    if (error) {
        //console.log("error");
    }
    //console.log(studentReport);
    const tasks= studentReport?.filter((task) => task.type === "task");
    const exams = studentReport?.filter((exam) => exam.type === "exam");
    //console.log(tasks);
    //console.log(exams);
    const assignments = studentReport?.filter((assignment) => assignment.type === "assignment");
    //console.log(assignments);

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
    let total = 0;
    let percentage = 0;
    if (studentReport) {
        total = studentReport?.reduce((acc, item) => acc + item.mark, 0);
        percentage = (total / studentReport?.length);

    }
    //console.log(total);
    //console.log(percentage.toFixed(2));

    let taskTotal = 0;
    let taskPercentage = 0;
    if (tasks) {
        taskTotal = tasks?.reduce((acc, item) => acc + item.mark, 0);
        taskPercentage = (taskTotal / tasks?.length);
    }
    let assignmentTotal = 0;
    let assignmentPercentage = 0;
    if (assignments) {
        assignmentTotal = assignments?.reduce((acc, item) => acc + item.mark, 0);
        assignmentPercentage = (assignmentTotal / assignments?.length);
    }
    let examTotal = 0;
    let examPercentage = 0;
    if (exams) {
        examTotal = exams?.reduce((acc, item) => acc + item.mark, 0);
        examPercentage = (examTotal / exams?.length);
    }
    const data = [
        {
            "category": "Exam",
    
            "icon": "material-symbols:style-outline",
            "value": examPercentage.toFixed(2)
        },
        {
            "category": "Assignment",
    
            "icon": "material-symbols:interactive-space-outline",
            "value": assignmentPercentage.toFixed(2)
        },
        {
            "category": "Task",
    
            "icon": "material-symbols:trophy-outline-sharp",
            "value": taskPercentage.toFixed(2)
        },
        {
            "category": "Attendance",
    
            "icon": "material-symbols:readiness-score-outline",
            "value": "90"
        }
    ]
    return (
        <>
            <div className="flex min-h-[80dvh] mb-4 sm:p-10 justify-center items-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1665680674724-3a3b3368e036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundSize: "cover" }}>
                <div className="flex flex-col sm:flex-row sm:w-[44rem] sm:h-[30rem] sm:rounded-3xl h-full w-full sm:shadow-lg bg-white">
                    <div className="flex sm:basis-1/2 flex-col items-center justify-center bg-gradient-to-b to-[#2e2be9] from-[#7857ff] sm:rounded-3xl rounded-b-3xl py-7 px-10">
                        <h2 className="text-[#ebf1ff] font-hankengrotesk text-xl sm:text-lg font-bold">Your Result</h2>
                        {
                            (studentReport) ?
                                <div className="flex flex-col items-center justify-center w-fit aspect-square rounded-full bg-gradient-to-b from-[#2421ca]/100 to-[#4e21ca]/0 my-6">
                                    <h1 className="text-white p-3 font-hankengrotesk text-7xl sm:text-6xl font-extrabold">{percentage.toFixed(2)}</h1>
                                    <p className="text-[#c8c7ff] text-lg sm:text-base font-hankengrotesk">of 100</p>
                                </div>
                                :
                                <div className="flex flex-col items-center justify-center w-32 aspect-square rounded-full bg-gradient-to-b from-[#2421ca]/100 to-[#4e21ca]/0 my-6">
                                    <div className="w-32 aspect-square rounded-full border-t-8 border-b-8 border-green-500 animate-spin">
                                    </div>
                                </div>
                        }


                        <h1 className="text-white font-hankengrotesk text-3xl sm:text-2xl mb-2 font-extrabold">{(percentage.toFixed(2) > 65) ? "Passed" : "Failed"}</h1>
                        <p className="text-center text-[#ebf1ff] text-lg sm:text-base font-hankengrotesk">{(percentage.toFixed(2) > 65) ? "You scored higher than 65% of the people who have taken these tests." : "You Failed. Plz Repeat Courses Again."}</p>
                    </div>
                    <div className="flex sm:basis-1/2 flex-col min-h-auto justify-between space-y-5 p-8 sm:px-10">
                        <h1 className="font-hankengrotesk text-xl sm:text-lg font-bold">Summary</h1>
                        <div className="flex flex-col space-y-4">
                            {data?.map((skill, index) => (

                                (studentReport)
                                    ?
                                    <TopFive
                                        key={index}
                                        source={skill.icon}
                                        category={skill.category}
                                        score={skill.value}
                                        colorIndex={index}
                                    />
                                    : null


                            ))}
                        </div>
                        <button className="bg-[#303b5a] sm:hover:bg-gradient-to-b to-[#2e2be9] from-[#7857ff] active:bg-gradient-to-b text-white py-4 sm:py-3 rounded-full font-hankengrotesk text-xl sm:text-lg font-bold" onClick={() => navigate(`#large`)}>Continue</button>
                    </div>
                </div>
            </div>
            <div id='large' className=" flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[96%] p-2 mx-auto">
                <div className="w-full">
                    <ul className=" flex gap-2 flex-wrap px-1.5 py-1.5 list-none rounded-lg bg-slate-300" data-tabs="tabs" role="list">
                        <li className={`${tab == "Exam" ? "bg-white rounded-lg " : "transition-all ease-in-out"} transition-all ease-in-out duration-200 z-30 flex-auto text-center   `}>
                            <button className="font-semibold flex items-center justify-center w-full px-0 py-2 text-sm mb-0  border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit hover:bg-white"
                                onClick={() => setTab("Exam")}>
                                Exam
                            </button>
                        </li>
                        <li className={`${tab == "Assignment" ? "bg-white rounded-lg " : "transition-all "} transition-all ease-in-out  duration-200 z-30 flex-auto text-center   `}>
                            <button className="font-semibold flex items-center justify-center w-full px-0 py-2 mb-0 text-sm  border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit hover:bg-white"
                                onClick={() => setTab("Assignment")}>
                                Assignment
                            </button>
                        </li>
                        <li className={`${tab == "Task" ? "bg-white rounded-lg " : "transition-all ease-in-out"} transition-all ease-in-out duration-200 z-30 flex-auto text-center   `}>
                            <button className="font-semibold flex items-center justify-center w-full px-0 py-2 text-sm mb-0  border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit hover:bg-white"
                                onClick={() => setTab("Task")}>
                                Task
                            </button>
                        </li>
                    </ul>

                    <div className="p-3">

                        {(tab == "Exam") && <div >
                            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                Exam Report
                            </h5>
                            <ReportTable data={exams} />
                        </div>}
                        {(tab == "Assignment") && <div >
                            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                Assignment Report
                            </h5>
                            <ReportTable data={assignments} />
                        </div>}
                        {(tab == "Task") && <div >
                            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                Task Report
                            </h5>
                            <ReportTable data={tasks} />
                        </div>}

                    </div>
                </div>
            </div>


        </>
    )
}

export default StudentAllRecord