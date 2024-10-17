import React from 'react'

const StudentCourseVideo = () => {
    const handelNext = () => {
        console.log("Next")
    }
    return (
        <>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white min-w-sm w-[90%] flex flex-col md:flex-row">
                    <div class="p-6 md:w-[70%]">
                    <video width="320" height="240" controls class="w-full rounded-t-lg">
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    </div>

                    <div class="p-6 md:w-[30%]">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handelNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentCourseVideo