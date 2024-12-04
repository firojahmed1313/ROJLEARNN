import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../../Redux/Features/User/UserSlice';
import { getStudentsLike } from '../../../Redux/Features/Activity/StudentsLikeSlice';
import ActivityTable from './ActivityTable'


const StudentLike = () => {
  const StudentsLike = useSelector((state) => state.getStudentLike.studentsLike);
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
      if (!StudentsLike && user != null) {
        dispatch(getStudentsLike(user._id));
      }
    }, 2000)

  }, [])
 //console.log(StudentsLike)
  return (
    <>
      <ActivityTable type="like" data={StudentsLike}/>
    </>

  )
}

export default StudentLike