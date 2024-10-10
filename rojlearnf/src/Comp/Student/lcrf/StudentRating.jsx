import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getStudentsRating } from '../../../Redux/Features/Activity/StudentsRatingSlice';
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../../Redux/Features/User/UserSlice';


const StudentRating = () => {
  const studentsRating = useSelector((state) => state.getStudentsRating.studentsRating);
  const user = useSelector((state) => state.getUser.user);
  const token = Cookies.get("ROJLEARN");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  useEffect(() => {
    setTimeout(() => {
      if (user == null) {
        dispatch(getProfileData(token));
      }

    }, 1000)

  }, [])
  useEffect(() => {
    setTimeout(() => {
      if (!studentsRating && user != null) {
        dispatch(getStudentsRating(user._id));
      }
    }, 2000)

  }, [])
  return (
    <div>StudentRating</div>
  )
}

export default StudentRating