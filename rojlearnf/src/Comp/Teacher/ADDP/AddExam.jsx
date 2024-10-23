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

const AddExam = () => {
    const handleAddCourse = () => {
        console.log("Add Course");
    }
    return (
        <>
            <AlertDialog>
                <div className='w-full mt-8'>
                    <AlertDialogTrigger asChild>
                        <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 ml-auto mr-4">Add Exam</button>
                    </AlertDialogTrigger>
                </div>

                <AlertDialogContent>
                <ScrollArea className="h-fit rounded-md border-4 m-2  w-fit">
                    <div className="p-2">
                    <AlertDialogHeader>
                        <div className="bg-white h-[60dvh] rounded-lg  m-2">
                            <div className="flex items-start justify-between p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold">Add Exam</h3>
                                <AlertDialogCancel> <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
                                </button></AlertDialogCancel>
                            </div>

                            <div className="p-6 space-y-6">
                                <form onSubmit={handleAddCourse}>
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="product-name"
                                                className="text-sm font-medium text-gray-900 block mb-2"
                                            >
                                                Product Name
                                            </label>
                                            <input
                                                type="text"
                                                name="product-name"
                                                id="product-name"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                placeholder="Apple Imac 27”"
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
                                                htmlFor="brand"
                                                className="text-sm font-medium text-gray-900 block mb-2"
                                            >
                                                Brand
                                            </label>
                                            <input
                                                type="text"
                                                name="brand"
                                                id="brand"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                placeholder="Apple"
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
                                        <div className="col-span-full">
                                            <label
                                                htmlFor="product-details"
                                                className="text-sm font-medium text-gray-900 block mb-2"
                                            >
                                                Product Details
                                            </label>
                                            <textarea
                                                id="product-details"
                                                rows="6"
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
                                                Add Exam
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

export default AddExam;
