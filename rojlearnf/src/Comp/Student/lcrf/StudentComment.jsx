import React from 'react'
import { useSelector } from 'react-redux'
import { getStudentComments } from '../../../Redux/Features/Activity/StudentCommentsSlice';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getProfileData } from '../../../Redux/Features/User/UserSlice';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ActivityTable from './ActivityTable'

const StudentComment = () => {
    const StudentComments = useSelector((state) => state.getStudentComments.studentComments);
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
            if (!StudentComments && user != null) {
                dispatch(getStudentComments(user._id));
            }
        }, 2000)

    }, [])
   //console.log(StudentComments)

    return (
        <ActivityTable type="comments" data={StudentComments}/>
    )
}

export default StudentComment