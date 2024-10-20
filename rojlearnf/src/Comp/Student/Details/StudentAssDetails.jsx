import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getAssignmentDetails } from '@/Redux/Features/EATDetailsByid/GetAssignmentDetailsSlice'

const StudentAssDetails = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = location.pathname.substring(19);
    console.log(id);
    const token = Cookies.get('ROJLEARN');
    console.log(token);
    const assignmentDetails = useSelector((state) => state.getAssignmentById.assignmentDetails);
    console.log(assignmentDetails);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
          if (assignmentDetails == null) {
            dispatch(getAssignmentDetails(id));
          }
        }
    }, [id])
  return (
    <div>StudentAssDetails</div>
  )
}

export default StudentAssDetails