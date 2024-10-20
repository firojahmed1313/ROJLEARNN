import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getSubmitTask } from '@/Redux/Features/SubmitTeacher/GetSubmitTaskSlice'
import { useEffect } from 'react'
import ButtonGive from '@/Comp/Button/ButtonGive'

const TeacherTaskExtra = () => {
    const [showSubmit, setShowSubmit] = React.useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = location.pathname.substring(13);
    console.log(id);
    const token = Cookies.get('ROJLEARN');
    console.log(token);
    const submitTask = useSelector((state) => state.getSubmitTask.submitTask);
    console.log(submitTask);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {

            dispatch(getSubmitTask(id));

        }
    }, [id])
    const marksHandle = (e) => {
        e.preventDefault();
        const fromobj = new FormData(e.target);
        const obj = Object.fromEntries(fromobj.entries());
        console.log(obj);
    }
    return (
        <>
            {
                (!showSubmit)?
                <ButtonGive title="Show Answer" colore="before:bg-pink-300" hander={() => setShowSubmit(!showSubmit)} />
                :
                <ButtonGive title="Hide Answer" colore="before:bg-pink-300" hander={() => setShowSubmit(!showSubmit)} />
            }
            {showSubmit &&
            <div className=' h-[200dvh] border-2 w-[96%] mx-auto my-4 '>

                <ScrollArea className="h-full w-full">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10 ">
                        {(submitTask !== null) ?
                            submitTask?.map((item) => {
                                return (
                                    <div class=" border-2 m-2 rounded-lg   bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-4 space-y-3 relative overflow-hidden  cursor-pointer">
                                        <ScrollArea className="h-[300px] w-full">
                                            <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 pr-4">{item.answer}</p>
                                        </ScrollArea>
                                        <div>
                                            <form onSubmit={marksHandle} class="mx-auto my-12 max-w-xl sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow">
                                                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                    <div class="relative text-gray-500 sm:w-7/12">

                                                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path fill="black" d="M10.985 3.165a1 1 0 0 0-1.973-.33l-.86 5.163L3.998 8A1 1 0 1 0 4 10l3.817-.002l-.667 4L3 14a1 1 0 1 0 0 2l3.817-.002l-.807 4.838a1 1 0 1 0 1.973.329l.862-5.167l4.975-.003l-.806 4.84a1 1 0 1 0 1.972.33l.862-5.17L20 15.992a1 1 0 0 0 0-2l-3.819.001l.667-4.001l4.153-.003a1 1 0 0 0-.002-2l-3.817.002l.804-4.827a1 1 0 1 0-1.972-.33l-.86 5.159l-4.975.003zm-1.14 6.832l4.976-.003l-.667 4.001l-4.976.002z" />
                                                            </svg>
                                                        </div>
                                                        <input type="number" name="marks" id="marks" placeholder="Enter Marks" class="w-full cursor-text rounded-xl border-2 py-4 pr-4 pl-10 text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring" required="" />
                                                    </div>

                                                    <button type="submit" class="group flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-white transition">
                                                        <span class="group flex w-full items-center justify-center rounded text-center font-medium">Submit Marks</span>
                                                        <svg class="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )
                            }) : <h3 className="text-center ">No Data</h3>
                        }




                    </div>
                </ScrollArea>
            </div>}
        </>
    )
}

export default TeacherTaskExtra