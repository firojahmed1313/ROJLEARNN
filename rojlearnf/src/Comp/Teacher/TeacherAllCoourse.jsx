import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getCourseByTeacher } from '../../Redux/Features/Course/teacher/getCourseByTeacherSlice'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../Redux/Features/User/UserSlice';

const TeacherAllCoourse = () => {
    const course = useSelector((state) => state.getTeacherCourse.courseByTeacher)  ;
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
                dispatch(getCourseByTeacher(user._id));
            }
        },2000)
        
    }, [])
    console.log(course);
  return (
    <div>TeacherAllCoourse</div>
  )
}

export default TeacherAllCoourse