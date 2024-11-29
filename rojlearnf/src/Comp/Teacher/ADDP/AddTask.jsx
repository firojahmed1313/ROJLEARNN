import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";


const burl = import.meta.env.VITE_URL;
const addTaskFunc = async (data) => {
    const token = Cookies.get("ROJLEARN");
    const response = await axios.post(`${burl}/task/create`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    })
    return response.data;
}
const AddTask = () => {
    const course = useSelector((state) => state.getTeacherCourse.courseByTeacher);
    //console.log(course);
    const { mutate, isLoading, isError, error } = useMutation({
        mutationFn: addTaskFunc,
        onSuccess: (data) => {
            //console.log("Task Added", data);
            toast.success(`Task Added `, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        },
        onError: (error) => {
            //console.log("Some Error", error);
            toast.error( error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    })
    const handleAddCourse = (e) => {
        e.preventDefault();
        //console.log("Add Course");
        const fromobj = new FormData(e.target);
        const obj = Object.fromEntries(fromobj.entries());
        //console.log(obj);
        mutate(obj);
    }
    return (
        <>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
            <AlertDialog>
                <div className='w-full mt-8'>
                    <AlertDialogTrigger asChild>
                    <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 ml-auto mr-4">Add Task</button>
                    </AlertDialogTrigger>
                </div>

                <AlertDialogContent>
                <div className="w-full flex justify-end p-2">
                        <AlertDialogCancel className="w-fit ml-auto border-2">
                            {" "}
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
                                data-modal-toggle="product-modal"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </AlertDialogCancel>
                    </div>

                <ScrollArea className="h-fit rounded-md border-4 m-2  w-fit">
                    <div className="p-2">
                    <AlertDialogHeader>
                        <div className="bg-white h-[60dvh] rounded-lg  m-2">
                            <div className="flex items-start justify-between p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold">Add Task</h3>
                                
                            </div>

                            <div className="p-6 space-y-6">
                            <form onSubmit={handleAddCourse}>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-full">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="courseid" className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                                            Select Course
                                        </label>
                                        <div className='relative z-20'>
                                            <select id="courseid" name="courseid" className='relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'>
                                                {
                                                    course?.map((item, index) => (
                                                        <option key={index} value={item._id} className='dark:bg-dark-2'>{item.title}</option>
                                                    ))
                                                }

                                            </select>
                                            <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="product-name"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder=""
                                        required=""
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="totalquestions"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Total Questions
                                    </label>
                                    <input
                                        type="number"
                                        name="totalquestions"
                                        id="totalquestions"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="100"
                                        required=""
                                    />
                                </div>
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="taskquestions"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Task Questions
                                    </label>
                                    <input
                                        type="text"
                                        name="taskquestions"
                                        id="taskquestions"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="Questions"
                                        required=""
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="totalduration"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Total Duration In Hours
                                    </label>
                                    <input
                                        type="number"
                                        name="totalduration"
                                        id="totalduration"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="2"
                                        required=""
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="totalmarks"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Total Marks
                                    </label>
                                    <input
                                        type="number"
                                        name="totalmarks"
                                        id="totalmarks"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="100"
                                        required=""
                                    />
                                </div>
                                
                                <div className="col-span-full">
                                    <label
                                        htmlFor="descriptions"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Descriptions
                                    </label>
                                    <textarea
                                        id="descriptions"
                                        rows="6"
                                        name="descriptions"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                        placeholder="Details"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-6 border-gray-200 rounded-b">
                                <AlertDialogAction>
                                    <button
                                        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        type="submit"
                                    >
                                        Add Assignment
                                    </button>
                                </AlertDialogAction>

                            </div>
                        </form>
                            </div>



                        </div>
                    </AlertDialogHeader>
                    </div>
                    </ScrollArea>
                    
                </AlertDialogContent>
            </AlertDialog>




        </>
    );
};

export default AddTask;
