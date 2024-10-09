import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentReport } from '../../Redux/Features/Report/GetStudentReportSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../Redux/Features/User/UserSlice';

const StudentAllRecord = () => {
    const user = useSelector((state) => state.getUser.user);
    const token = Cookies.get("ROJLEARN");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if(!token){
        navigate("/login");
    }
    const studentReport = useSelector((state) => state.getStudentReport.studentReport);
    const loading = useSelector((state) => state.getStudentReport.loading);
    const error = useSelector((state) => state.getStudentReport.error);
    if(loading){
        console.log("loading");
    }
    if(error){
        console.log("error");
    }
    console.log(studentReport);

    useEffect(() => {
        setTimeout(() => {
            if(user==null){
                dispatch(getProfileData(token));
            }
            
        },1000)
        
    }, [])
    useEffect(() => {
        setTimeout(() => {
            if(!studentReport && user!=null){
                dispatch(getStudentReport(user._id));
            }
        },2000)
        
    }, [])
  return (
    <div>StudentAllRecord</div>
  )
}

export default StudentAllRecord