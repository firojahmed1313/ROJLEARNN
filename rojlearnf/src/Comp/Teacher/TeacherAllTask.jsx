import React from "react";
import AddTask from "./ADDP/AddTask";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseByTeacher } from "@/Redux/Features/Course/teacher/getCourseByTeacherSlice";
import { useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import AETST from "../utlits/AETST";

const data = [
    {
        id: 1,
        title: "Task 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.",
    },
    {
        id: 2,
        title: "Task 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.",
    },
    {
        id: 3,
        title: "Task 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.",
    },
    {
        id: 4,
        title: "Task 4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.",
    },
];
const TeacherAllTask = () => {
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
                    All Tasks
                </p>
            </div>
            <div className="my-4 ">
                <AddTask />
            </div>
            {courses?.length != 0 ? (
                <div className="grid grid-cols-1 w-[98%] mx-auto ">
                    <Accordion type="single" collapsible className="w-[98%] mx-auto  ">
                        {courses?.map((course, index) => {
                            return (
                                
                                <AccordionItem key={index} value={`item-${course._id}`} className="my-3 transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                    <AccordionTrigger className=" px-4 flex text-xl font-bold text-black">{course.title}</AccordionTrigger>
                                    <AccordionContent className="p-4 text-sm text-zinc-500 leading-6">
                                        <AETST id={course._id} type="Task" role="teacher" />
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
};

export default TeacherAllTask;
