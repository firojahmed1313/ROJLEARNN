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
const AddCourse = () => {
    const handleAddCourse = () => {
        console.log("Add Course");
    }
    return (
        <>
            <AlertDialog>
                <div className='w-full mt-8 z-50'>
                    <AlertDialogTrigger asChild>
                        <button
                            class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group ml-auto mr-4"
                        >
                            <span
                                class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                    class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                    class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                            ></span>
                            <span
                                class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >Add Course</span
                            >
                        </button>

                    </AlertDialogTrigger>
                </div>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="bg-white border-4 rounded-lg  shadow m-2">
                            <div className="flex items-start justify-between p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold">Add Course</h3>
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
                                                Add Course
                                            </button>
                                        </AlertDialogAction>

                                    </div>
                                </form>
                            </div>



                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>




        </>
    );
};

export default AddCourse;
