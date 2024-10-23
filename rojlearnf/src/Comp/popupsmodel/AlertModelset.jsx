import React from 'react'
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
const AlertModelset = () => {
    return (
        <>
            <AlertDialog>
                <div className='w-full mt-8'>
                    <AlertDialogTrigger asChild>
                        <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 ml-auto mr-4">Add Exam</button>
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
                                        <h3 className="text-xl font-semibold"></h3>

                                    </div>

                                    <div className="p-6 space-y-6">

                                    </div>



                                </div>
                            </AlertDialogHeader>
                        </div>
                    </ScrollArea>

                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default AlertModelset