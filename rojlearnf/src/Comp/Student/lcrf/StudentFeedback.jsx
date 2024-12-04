import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentFeedback } from '../../../Redux/Features/Activity/StudentFeedbackSlice';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../../Redux/Features/User/UserSlice';
import ActivityTable from './ActivityTable'

const StudentFeedback = () => {
  const StudentFeedbacks = useSelector((state) => state.getStudentsFeedback.studentFeedback);
  const user = useSelector((state) => state.getUser.user);
  const token = Cookies.get("ROJLEARN");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(!token){
    navigate("/login");
}
useEffect(() => {
    setTimeout(() => {
        if(user==null){
            dispatch(getProfileData(token));
        }
        
    },1000)
    
}, [])
useEffect(() => {
    setTimeout(() => {
        if(!StudentFeedbacks && user!=null){
            dispatch(getStudentFeedback(user._id));
        }
    },2000)
    
}, [])
//console.log(StudentFeedbacks)
  return (
    <ActivityTable type="feedback" data={StudentFeedbacks}/>
  )
}

export default StudentFeedback