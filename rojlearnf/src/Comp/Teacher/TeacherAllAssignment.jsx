import React, { useEffect } from 'react'
import Chackout from '../chackout/Chackout'
import AddAssignment from './ADDP/AddAssignment'
import { Link, useNavigate } from 'react-router-dom'
import { getCourseByTeacher } from "@/Redux/Features/Course/teacher/getCourseByTeacherSlice";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch , useSelector} from 'react-redux';
import AETST from '../utlits/AETST';

const data = [
    {
        id: 1,
        title: 'Assignment 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 2,
        title: 'Assignment 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 3,
        title: 'Assignment 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum '
    },
    {
        id: 4,
        title: 'Assignment 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    }
]
const TeacherAllAssignment = () => {
    const navigate = useNavigate();
    const courses = useSelector((state) => state.getTeacherCourse.courseByTeacher);
    console.log("course", courses);
    const user = useSelector((state) => state.getUser.user);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            if (!courses && user != null) {
                dispatch(getCourseByTeacher(user._id));
            }
        }, 2000);
    }, []);

    return (
        <>
            <div>
                <p className=" text-center text-blue-700 mt-4 text-3xl font-bold">
                    All Assignments
                </p>
            </div>
            <div className="my-4 ">
                <AddAssignment />
            </div>
            {courses?.length != 0 ? (
                <div className="grid grid-cols-1 w-[98%] mx-auto ">
                    <Accordion type="single" collapsible className="w-[98%] mx-auto  ">
                        {courses?.map((course) => {
                            return (
                                <AccordionItem value={`item-${course._id}`} className="my-3 transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                    <AccordionTrigger className=" px-4 flex text-xl font-bold text-black">{course.title}</AccordionTrigger>
                                    <AccordionContent className="p-4 text-sm text-zinc-500 leading-6">
                                        <AETST id={course._id} type="Assignment" />
                                    </AccordionContent>
                                </AccordionItem>

                            );
                        })}
                    </Accordion>
                </div>
            ) : (
                <h4>No Task</h4>
            )}
        </>
    );
}

export default TeacherAllAssignment