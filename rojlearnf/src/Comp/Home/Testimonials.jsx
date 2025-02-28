import React from 'react'

const Testimonials = ({ RatingData }) => {
    //console.log("Testimonials", RatingData)
    return (
        <>
            <section className="bg-white">

                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Read trusted reviews from our customers
                    </h2>
                    {
                        RatingData?.length == 0 ?
                            <h3 className="mt-4 text-center text-lg font-bold tracking-tight text-gray-900 ">
                                No reviews yet
                            </h3>
                            :
                            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                                {
                                    RatingData?.data?.map((data, index) => {
                                        return (
                                            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8" key={index}>
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        alt=""
                                                        src="https://picsum.photos/200"
                                                        className="size-14 rounded-full object-cover"
                                                    />

                                                    <div>
                                                        <div className="flex justify-start gap-0.5 text-green-500">
                                                            {Array.from({ length: 5 }, (_, index) => (
                                                                <svg
                                                                    key={index}
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className={`size-5 ${index < data.rating ? "text-green-500" : "text-gray-300"}`}
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                    />
                                                                </svg>
                                                            ))}
                                                        </div>

                                                        <p className="mt-0.5 text-lg font-medium text-gray-900">Annomalous</p>
                                                    </div>

                                                </div>

                                                <p className="mt-4 text-gray-700">
                                                    {/* {RatingData?.data[0]?.message} */}
                                                    {data?.message}
                                                </p>
                                            </blockquote>
                                        )

                                    })
                                }



                            </div>
                    }

                </div>
            </section>

        </>
    )
}

export default Testimonials