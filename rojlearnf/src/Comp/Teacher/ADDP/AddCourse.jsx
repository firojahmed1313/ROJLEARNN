import React, { useEffect } from "react";
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
import { getProfileData } from '@/Redux/Features/User/UserSlice';
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
const burl = import.meta.env.VITE_URL;

const addCourseFunc = async (data) => {
    const token = Cookies.get("ROJLEARN");
    const response = await axios.post(`${burl}/course/create`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    })
    return response.data;
}
const AddCourse = () => {
    const dispatch = useDispatch();
    const data = Cookies.get("ROJLEARN");
    const User = useSelector((state) => state.getUser);
    console.log(User);
    const { mutate, isLoading, isError, error } = useMutation({
        mutationFn: addCourseFunc,
        onSuccess: (data) => {
            console.log("add course", data);
            toast.success(`Course Added `, {
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
            console.log("Some Error", error);
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
    useEffect(() => {
        dispatch(getProfileData(data));
    }, [data]);
    const handleAddCourse = (e) => {
        e.preventDefault();
        console.log("Add Course");
        const fromobj = new FormData(e.target);
        const obj = Object.fromEntries(fromobj.entries());
        console.log(obj);
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
                <div className='w-full mt-8 z-50'>
                    <AlertDialogTrigger asChild>
                        <button
                            className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group ml-auto mr-4"
                        >
                            <span
                                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                            ></span>
                            <span
                                className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >Add Course</span
                            >
                        </button>

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
                        
                            <div className="bg-white h-[60dvh] rounded-lg  ">
                                <div className="flex items-start justify-between p-5 border-b rounded-t">
                                    <h3 className="text-xl font-semibold">Add Course</h3>
                                    
                                </div>

                                <div className="p-6 space-y-6">
                                    <form onSubmit={handleAddCourse}>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6">
                                                <label
                                                    htmlFor="title"
                                                    className="text-sm font-medium text-gray-900 block mb-2"
                                                >
                                                    Course Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="Learn Java "
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="category"
                                                    className="text-sm font-medium text-gray-900 block mb-2"
                                                >
                                                    Category
                                                </label>
                                                <input
                                                    type="text"
                                                    name="category"
                                                    id="category"
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="Electronics"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="thumbnail_url"
                                                    className="text-sm font-medium text-gray-900 block mb-2"
                                                >
                                                    Thumbnail Url
                                                </label>
                                                <input
                                                    type="text"
                                                    name="thumbnail_url"
                                                    id="thumbnail_url"
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="www.example.com/image.jpg"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="price"
                                                    className="text-sm font-medium text-gray-900 block mb-2"
                                                >
                                                    Price
                                                </label>
                                                <input
                                                    type="number"
                                                    name="price"
                                                    id="price"
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="$2300"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    htmlFor="duration_hours"
                                                    className="text-sm font-medium text-gray-900 block mb-2"
                                                >
                                                    Duration in Hours
                                                </label>
                                                <input
                                                    type="number"
                                                    name="duration_hours"
                                                    id="duration_hours"
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="$2300"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-span-full">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="instructor" className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                                                        Instructor
                                                    </label>
                                                    <div className='relative z-20'>
                                                        <select id="instructor" name="instructor" className='relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'>
                                                            <option value={User?.user?._id} className='dark:bg-dark-2'>{User?.user?._id}</option>

                                                        </select>
                                                        <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-full">
                                                <label
                                                    htmlFor="description"
                                                    className="text-sm font-medium text-gray-900 block mb-2"
                                                >
                                                    Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    rows="6"
                                                    name="description"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                                    placeholder="Description"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="mt-6 border-gray-200 rounded-b">
                                            <AlertDialogAction>
                                                <button
                                                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                    type="submit"
                                                >
                                                    Add Course
                                                </button>
                                            </AlertDialogAction>

                                        </div>
                                    </form>
                                </div>



                            </div>
                    </AlertDialogHeader>
                    </div>
                
                </ScrollArea>
                    <AlertDialogFooter>

                    </AlertDialogFooter>
                </AlertDialogContent>

            </AlertDialog>




        </>
    );
};

export default AddCourse;
