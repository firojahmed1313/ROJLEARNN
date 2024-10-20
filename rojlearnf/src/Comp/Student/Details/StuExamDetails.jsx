import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getExamDetails } from '@/Redux/Features/EATDetailsByid/GetExamDetailsSlice'
import { useEffect } from 'react'

const StuExamDetails = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = location.pathname.substring(13);
    console.log(id);
    const token = Cookies.get('ROJLEARN');
    console.log(token);
    const examDetails = useSelector((state) => state.getExamById.examDetails);
    console.log(examDetails);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
          if (examDetails == null) {
            dispatch(getExamDetails(id));
          }
        }
    }, [id])
  return (
    <div>StuExamDetails</div>
  )
}

export default StuExamDetails