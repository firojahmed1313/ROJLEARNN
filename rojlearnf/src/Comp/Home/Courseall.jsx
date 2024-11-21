import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseData } from '../../Redux/Features/Course/getCourseSlice'
import { formatDateString } from '../utlits/FormatDateString'
import CartColloder from '../utlits/loder/CartColloder'
import ButtomNavHome from '../Navber/ButtomNavHome'
import generateFilterQueryString from '../utlits/CreateFilterString'

const filters = {
    searchKeyword: "", // Search term
    sortBy: { field: "price", order: "ASE" }, // Sort field and order (asc/desc)
    availability: "in-stock", // Availability filter
    category: "", // Category filter
    minPrice: 0, // Minimum price filter
    maxPrice: 2000, // Maximum price filter
};

const filterAvailability = [

    { name: "In Stock", id: "FilterInStock", value: "in-stock" },
    { name: "Out Of Stock", id: "FilterOutOfStock", value: "out-of-stock" },
    { name: "Pre Order", id: "FilterPreOrder", value: "pre-order" },

];

const filterCategory = [
   { name: "Programming", id: "FilterProgramming", value: "Programming" },
   { name: "Data Science", id: "FilterDataScience", value: "DataScience" },
   { name: "Web Development", id: "FilterWebDevelopment", value: "WebDevelopment" },
   { name: "Blockchain", id: "FilterBlockchain", value: "Blockchain" }
]


const GetTeacherData = ({ dateObj, id }) => {

    return (
        <>
            <a
                href="#"><img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
            <div className="text-sm">
                <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
                    Jonathan Reinink
                </a>
                <p className="text-gray-600">{dateObj.month} - {dateObj.day} - {dateObj.year} at {dateObj.hour}:{dateObj.minutes}:{dateObj.seconds} {dateObj.period}</p>
            </div>
        </>
    )
}
const Courseall = () => {
    const [courseData, setCourseData] = useState([]);
    const [searchData, setSearchData] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const course = useSelector((state) => state.getCourse.course);
    const loading = useSelector((state) => state.getCourse.isLoading);
    const error = useSelector((state) => state.getCourse.error);

    console.log(course);
    useEffect(() => {
        if (course != null) {
            setCourseData(course.data);
        }
    }, [course])


    useEffect(() => {
        dispatch(getCourseData());
    }, [])
    const handelSearch = (e) => {
        e.preventDefault();
        console.log(searchData);
        filters.searchKeyword = searchData;
        console.log(filters);
        setSearchData("");
        let fs = generateFilterQueryString(filters);
        //GotoCourse(fs);
        navigate(`/courses${fs}`);
        console.log(fs);
    }
    const handelAvailability = (e) => {
        filters.availability = e;
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);
    }
    const handelResetAvailability = () => {
        filters.availability = "in-stock";
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);
    }
    const handelCategory = (e) => {
        filters.category = e;
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);
    }
    const handelResetCategory = () => {
        filters.category = "";
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);
    }
    const handelFilterPrice = (e) => {
        e.preventDefault();
        const fromobj = new FormData(e.target);
        const obj = Object.fromEntries(fromobj.entries());
        console.log(obj);
        filters.minPrice = obj.minPrice;
        filters.maxPrice = obj.maxPrice;
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);

    }
    const handelResetPrice = () => {
        filters.minPrice = 0;
        filters.maxPrice = 2000;
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);
    }
    const handelSort = (e) => {
        let field, order;
        //console.log(typeof e);
        field = e.substring(0, e.indexOf(","));
        order = e.substring(e.indexOf(",") + 1);
        filters.sortBy.field = field;
        filters.sortBy.order = order;
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);


    }
    const handelResetAll = () => {
        filters.searchKeyword = "";
        filters.availability = "in-stock";
        filters.category = "";
        filters.minPrice = 0;
        filters.maxPrice = 2000;
        filters.sortBy.field = "price";
        filters.sortBy.order = "ASE";
        console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        console.log(fs);
    }


    return (
        <>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>
                    <div className="relative mt-4">
                        <div>
                            <label htmlFor="Search" className="sr-only"> Search </label>

                            <input
                                type="text"
                                id="Search"
                                placeholder="Search for..."
                                className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                value={searchData} onChange={(e) => setSearchData(e.target.value)}
                            />
                        </div>
                        <div>
                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <button type="button" className="text-gray-600 hover:text-gray-700"
                                    onClick={handelSearch}
                                >
                                    <span className="sr-only">Search</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>

                    </div>
                    <div className="mt-8 block lg:hidden">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 ">
                            <div className="mr-4 " >
                                <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm font-medium " onChange={(e) => handelSort(e.target.value)} >
                                    <option>Sort By</option>
                                    <option value="Duration,DESC">Duration, DESC</option>
                                    <option value="Duration,ASC">Duration, ASC</option>
                                    <option value="Price,DESC">Price, DESC</option>
                                    <option value="Price,ASC">Price, ASC</option>
                                    <option value="Date,DESC">Date, DESC</option>
                                    <option value="Date,ASC">Date, ASC</option>
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

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={handelResetAvailability}>
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4 overflow-y-auto">
                                                {
                                                    (filterAvailability)?.map((item, index) => (
                                                        <li key={index}>
                                                            <label htmlFor={item.id} className="inline-flex items-center gap-2">
                                                                <input type="radio" id={item.id} name="Availability" value={item.value} className="size-5 rounded border-gray-300" onChange={(e) => handelAvailability(e.target.value)} />
                                                                <span className="text-sm font-medium text-gray-700"> {item.name} </span>
                                                            </label>
                                                        </li>
                                                    ))
                                                }



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
                                        <form onSubmit={handelFilterPrice}>
                                            <div className="w-48 rounded border border-gray-200 bg-white">

                                                <div className="border-t border-gray-200 p-4">

                                                    <div className="flex justify-between gap-4">

                                                        <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                            <span className="text-sm text-gray-600">$</span>

                                                            <input
                                                                type="number"
                                                                id="FilterPriceFrom"
                                                                name='minPrice'
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
                                                                name='maxPrice'
                                                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                                <header className="flex items-center justify-evenly p-4">

                                                    <button type="submit" className="text-sm text-gray-900 underline underline-offset-4">
                                                        Go
                                                    </button>
                                                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4"
                                                    onClick={handelResetPrice}                                                    >

                                                        Reset
                                                    </button>
                                                </header>
                                            </div>
                                        </form>
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
                                        <div className="w-48 rounded border border-gray-200 bg-white h-[200px] overflow-hidden ">
                                            <div className='scrollbar overflow-scroll'>
                                                <header className="flex items-center justify-between p-4">
                                                    <span className="text-sm text-gray-700"> 0 Selected </span>

                                                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={handelResetCategory}>
                                                        Reset
                                                    </button>
                                                </header>

                                                <ul className="space-y-1 border-t border-gray-200 p-4">
                                                    {
                                                        filterCategory.map((item, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <label htmlFor={item.id} className="inline-flex items-center gap-2">
                                                                        <input type="radio" id={item.id} name="Category" value={item.value} className="size-5 rounded border-gray-300" onChange={(e) => handelCategory(e.target.value)} />

                                                                        <span className="text-sm font-medium text-gray-700"> {item.value} </span>
                                                                    </label>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <button type="button" className=" mt-6 rounded-md bg-gray-200 px-4 py-3 text-md font-medium text-gray-900 border-b-2 " onClick={handelResetAll}>Clear Filters</button>
                    </div>
                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                        <div className="hidden space-y-4 lg:block">
                            <button type="button" className=" mt-6 rounded-md bg-gray-200 px-4 py-3 text-md font-medium text-gray-900 border-b-2 " onClick={handelResetAll}>Clear Filters</button>

                            <div>
                                <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

                                <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm font-medium " onChange={(e) => handelSort(e.target.value)} >
                                    <option>Sort By</option>
                                    <option value="Duration,DESC">Duration, DESC</option>
                                    <option value="Duration,ASC">Duration, ASC</option>
                                    <option value="Price,DESC">Price, DESC</option>
                                    <option value="Price,ASC">Price, ASC</option>
                                    <option value="Date,DESC">Date, DESC</option>
                                    <option value="Date,ASC">Date, ASC</option>
                                </select>
                            </div>

                            <div>
                                <p className="block text-xs font-medium text-gray-700">Filters</p>

                                <div className="mt-1 space-y-2">
                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
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
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={handelResetAvailability}>
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                {
                                                    (filterAvailability)?.map((item, index) => (
                                                        <li key={index}>
                                                            <label htmlFor={item.id} className="inline-flex items-center gap-2">
                                                                <input type="radio" id={item.id} name="Availability" value={item.value} className="size-5 rounded border-gray-300" onChange={(e) => handelAvailability(e.target.value)} />
                                                                <span className="text-sm font-medium text-gray-700"> {item.name} </span>
                                                            </label>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </details>

                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
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
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <form onSubmit={handelFilterPrice}>
                                                <div className="w-48 rounded border border-gray-200 bg-white">

                                                    <div className="border-t border-gray-200 p-4">

                                                        <div className="flex justify-between gap-4">

                                                            <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                                <span className="text-sm text-gray-600">$</span>

                                                                <input
                                                                    type="number"
                                                                    id="FilterPriceFrom"
                                                                    name='minPrice'
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
                                                                    name='maxPrice'
                                                                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <header className="flex items-center justify-evenly p-4">

                                                        <button type="submit" className="text-sm text-gray-900 underline underline-offset-4">
                                                            Go
                                                        </button>
                                                        <button type="button" className="text-sm text-gray-900 underline underline-offset-4"
                                                        onClick={handelResetPrice}
                                                        >

                                                            Reset
                                                        </button>
                                                    </header>
                                                </div>
                                            </form>
                                        </div>
                                    </details>

                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
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
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4"  onClick={handelResetCategory}
                                                >
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                {
                                                    filterCategory.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <label htmlFor={item.id} className="inline-flex items-center gap-2">
                                                                    <input type="radio" id={item.id} name="Category" value={item.value} className="size-5 rounded border-gray-300" onChange={(e) => handelCategory(e.target.value)} />

                                                                    <span className="text-sm font-medium text-gray-700"> {item.value} </span>
                                                                </label>
                                                            </li>
                                                        )
                                                    })
                                                }


                                            </ul>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                                {
                                    (loading) ? <CartColloder /> :
                                        courseData?.map((course) => {
                                            const dateObj = formatDateString(course.created_at);
                                            return (
                                                <div
                                                    className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal" key={course._id}>
                                                    <img src={course.thumbnail_url} className="w-full mb-1" alt="COURSE THUMBNAIL" />
                                                    <div className="p-4 pt-2">
                                                        <div className="mb-2">
                                                            <p className="text-sm text-gray-600 flex items-center">
                                                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                                                                    </path>
                                                                </svg>
                                                                {course?.category}
                                                            </p>
                                                            <Link to={`/course/${course._id}`} className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                                                                {course.title}</Link>
                                                            <p className="text-gray-700 text-sm">{course.description}</p>
                                                        </div>
                                                        <Link to={`/course/${course._id}`} className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-blue-800 border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                                                        >
                                                            View Details
                                                        </Link>
                                                        <div className="flex items-center mt-3">
                                                            <GetTeacherData dateObj={dateObj} id={course.instructor} />
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                }




                            </div>

                        </div>


                    </div>

                </div>
                <div className="md:hidden w-full mx-auto left-0 fixed bottom-0">
                    <ButtomNavHome tab="Course" />
                </div>
            </section>
        </>
    )
}

export default Courseall