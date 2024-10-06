import React from 'react'

const Tracking = () => {
    return (
        <>
            <div className="relative p-4 mt-24 max-w-sm mx-auto">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                            In Progress
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-teal-600">
                            70%
                        </span>
                    </div>
                </div>
                <div className="flex rounded-full h-2 bg-gray-200">
                    <div style="width:70%" className="rounded-full bg-teal-500"></div>
                </div>
            </div>
            <div className='w-full px-4 lg:w-5/12'>
                <div className='mb-12'>
                    <div className='bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl'>
                        <div className='bg-primary absolute top-0 left-0 h-full w-1/2 rounded-2xl'>
                            <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white'>
                                <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                                50%
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mb-12'>
                    <div className='bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl'>
                        <div className='bg-primary absolute top-0 left-0 h-full w-[75%] rounded-2xl'>
                            <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white'>
                                <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                                75%
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mb-12'>
                    <div className='bg-stroke dark:bg-dark-3 relative h-2.5 w-full rounded-2xl'>
                        <div className='bg-primary absolute top-0 left-0 h-full w-[90%] rounded-2xl'>
                            <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white'>
                                <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                                90%
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tracking