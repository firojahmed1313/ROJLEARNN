import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseofStudent } from '../../Redux/Features/Course/getCourseofStudentSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../Redux/Features/User/UserSlice';


const AllStudentCourses = () => {
    const course = useSelector((state) => state.getCourseofStudent.course)  ;
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
            if(!course && user!=null){
                dispatch(getCourseofStudent(user._id));
            }
        },2000)
        
    }, [])
    console.log(course);
    

  return (
    <div>AllStudentCourses</div>
  )
}

export default AllStudentCourses