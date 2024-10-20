import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskDetails } from "@/Redux/Features/EATDetailsByid/GetTaskDetailsSlice"
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const StudentTaskDetails = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = location.pathname.substring(13);
    console.log(id);
    const token = Cookies.get('ROJLEARN');
    console.log(token);
    const taskDetails = useSelector((state) => state.getTaskById.taskDetails);
    console.log(taskDetails);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
          if (taskDetails == null) {
            dispatch(getTaskDetails(id));
          }
        }
    }, [id])
  return (
    <div>StudentTaskDetails</div>
  )
}

export default StudentTaskDetails