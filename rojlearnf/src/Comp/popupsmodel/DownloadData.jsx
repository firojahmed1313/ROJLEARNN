import React from 'react'

const DownloadData = () => {
    return (
        <>
            <div className="max-w-xl w-full mx-auto bg-gray-800 rounded-xl overflow-hidden">
                <div className="max-w-sm mx-auto pt-12 pb-8 px-5 text-center">
                    <div
                        className="inline-flex items-center justify-center w-12 h-12 mb-5 bg-gray-600 rounded-full"
                    >
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                    <path stroke="currentColor" trokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
                </svg>
                    </div>
                    <h4 className="text-xl text-gray-100 font-semibold mb-5">
                        Download Data
                    </h4>
                </div>
                <div className="pt-5 pb-6 px-6 text-right bg-gray-900 -mb-2">
                    <button
                        
                        className="inline-block w-full sm:w-auto py-3 px-5 mb-2 mr-4 text-center font-semibold leading-6 text-gray-200 bg-gray-500 hover:bg-gray-400 rounded-lg transition duration-200"
                    >In .zip</button
                    ><button
                        
                        className="inline-block w-full sm:w-auto py-3 px-5 mb-2 text-center font-semibold leading-6 text-blue-50 bg-red-500 hover:bg-red-600 rounded-lg transition duration-200"
                    >In .rar</button
                    >
                </div>
            </div>

        </>
    )
}

export default DownloadData