import React from 'react'

const FilterCourse = () => {
    return (
        <>
            <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
                <p className="mt-4 max-w-md text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                    dicta incidunt est ipsam, officia dolor fugit natus?
                </p>
            </header>
            <div className="mt-8 block lg:hidden">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 ">
                    <div className="mr-4 " >
                        <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm font-medium ">
                            <option>Sort By</option>
                            <option value="Title, DESC">Duration, DESC</option>
                            <option value="Title, ASC">Duration, ASC</option>
                            <option value="Price, DESC">Price, DESC</option>
                            <option value="Price, ASC">Price, ASC</option>
                            <option value="Price, DESC">Date, DESC</option>
                            <option value="Price, ASC">Date, ASC</option>
                        </select>
                    </div>
                    <div className="relative md:ml-4">
                        <details className="group [&_summary::-webkit-details-marker]:hidden w-fit">
                            <summary
                                className="flex cursor-pointer items-center gap-2 border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span className="text-sm font-medium"> Availability </span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div className="z-50 group-open:absolute group-open:right-0  group-open:top-auto group-open:mt-2 shadow-xl shadow-slate-600">
                                <div className="w-48 rounded border border-gray-200 bg-white">
                                    <header className="flex items-center justify-between p-4">
                                        <span className="text-sm text-gray-700"> 0 Selected </span>

                                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                            Reset
                                        </button>
                                    </header>

                                    <ul className="space-y-1 border-t border-gray-200 p-4">
                                        <li>
                                            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" />

                                                <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                <input type="checkbox" id="FilterPreOrder" className="size-5 rounded border-gray-300" />

                                                <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="FilterOutOfStock"
                                                    className="size-5 rounded border-gray-300"
                                                />

                                                <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>
                    <div className="relative">
                        <details className="group [&_summary::-webkit-details-marker]:hidden w-fit">
                            <summary
                                className="flex cursor-pointer items-center gap-2 border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span className="text-sm font-medium"> Price </span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div className="z-50 group-open:absolute group-open:right-0 group-open:top-auto group-open:mt-2 shadow-xl shadow-slate-600">
                                <div className="w-48 rounded border border-gray-200 bg-white">

                                    <div className="border-t border-gray-200 p-4">
                                        <div className="flex justify-between gap-4">
                                            <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">$</span>

                                                <input
                                                    type="number"
                                                    id="FilterPriceFrom"
                                                    placeholder="From"
                                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                />
                                            </label>

                                            <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">$</span>

                                                <input
                                                    type="number"
                                                    id="FilterPriceTo"
                                                    placeholder="To"
                                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <header className="flex items-center justify-evenly p-4">

                                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                            Go
                                        </button>
                                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                            Reset
                                        </button>
                                    </header>
                                </div>
                            </div>
                        </details>
                    </div>
                    <div className="relative">
                        <details className="group [&_summary::-webkit-details-marker]:hidden w-fit">
                            <summary
                                className="flex cursor-pointer items-center gap-2 border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                            >
                                <span className="text-sm font-medium"> Category </span>

                                <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>

                            <div className="z-50 group-open:absolute group-open:right-0 group-open:top-auto group-open:mt-2 shadow-xl shadow-slate-600">
                                <div className="w-48 rounded border border-gray-200 bg-white">
                                    <header className="flex items-center justify-between p-4">
                                        <span className="text-sm text-gray-700"> 0 Selected </span>

                                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                            Reset
                                        </button>
                                    </header>

                                    <ul className="space-y-1 border-t border-gray-200 p-4">
                                        <li>
                                            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" />

                                                <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                <input type="checkbox" id="FilterPreOrder" className="size-5 rounded border-gray-300" />

                                                <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                            </label>
                                        </li>

                                        <li>
                                            <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="FilterOutOfStock"
                                                    className="size-5 rounded border-gray-300"
                                                />

                                                <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>

                <button type="button" className=" mt-6 rounded-md bg-gray-200 px-4 py-3 text-md font-medium text-gray-900 border-b-2 ">Clear Filters</button>
            </div>

        </>
    )
}

export default FilterCourse