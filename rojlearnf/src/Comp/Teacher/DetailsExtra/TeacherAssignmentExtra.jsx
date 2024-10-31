import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getSubmitass } from '@/Redux/Features/SubmitTeacher/GetSubmitassSlice'
import ButtonGive from '@/Comp/Button/ButtonGive'
import { useEffect } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import SubmitAss from './SubmitAss'


const TeacherAssignmentExtra = () => {
  const [showSubmit, setShowSubmit] = React.useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = location.pathname.substring(19);
  console.log(id);
  const token = Cookies.get('ROJLEARN');
  console.log(token);
  const submitass = useSelector((state) => state.getSubmitass.submitass);
  const assignmentDetails = useSelector((state) => state.getAssignmentById.assignmentDetails);
  console.log(submitass);
  console.log(assignmentDetails);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    else {

      dispatch(getSubmitass(id));

    }
  }, [id])
  
  return (
    <>
      {
        (!showSubmit) ?
          <ButtonGive title="Show Answer" colore="before:bg-pink-300" hander={() => setShowSubmit(!showSubmit)} />
          :
          <ButtonGive title="Hide Answer" colore="before:bg-pink-300" hander={() => setShowSubmit(!showSubmit)} />
      }
      {showSubmit &&
        <div className=' h-[100dvh] border-2 w-[96%] mx-auto my-4 '>

          <ScrollArea className="h-full w-full">
            <div className="grid grid-cols-1 gap-10 ">
              {(submitass?.length != 0) ?
                submitass?.map((item, index) => {
                  return (
                    <SubmitAss
                      key={index}
                      item={item}
                      data={assignmentDetails}
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

export default TeacherAssignmentExtra