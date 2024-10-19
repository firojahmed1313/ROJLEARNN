import React from 'react'
import Courseall from '../../Comp/Home/Courseall'
import Nav from '../../Comp/Navber/Nav'
import AddCourse from '../../Comp/Teacher/ADDP/AddCourse'
import Footer from '../../Comp/Footer/Footer'
const CourseAll = () => {
    return (
        <>
            <Nav />
            <Courseall/>
            <AddCourse/>
            <Footer/>

        </>
    )
}

export default CourseAll