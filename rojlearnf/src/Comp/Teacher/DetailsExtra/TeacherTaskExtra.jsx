import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getSubmitTask } from '@/Redux/Features/SubmitTeacher/GetSubmitTaskSlice'
import { useEffect } from 'react'
import ButtonGive from '@/Comp/Button/ButtonGive'
import SubmitTask from './SubmitTask'

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
                        {(submitTask?.length != 0) ?
                            submitTask?.map((item, index) => {
                                return (
                                    <SubmitTask
                                        key={index}
                                        item={item}
                                    />
                                )
                            }) : <h3 className="text-center ">No Data Found</h3>
                        }




                    </div>
                </ScrollArea>
            </div>}
        </>
    )
}

export default TeacherTaskExtra