import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseData } from '../../Redux/Features/Course/getCourseSlice'
import { formatDateString } from '../utlits/FormatDateString'
import CartColloder from '../utlits/loder/CartColloder'
import ButtomNavHome from '../Navber/ButtomNavHome'
import generateFilterQueryString from '../utlits/CreateFilterString'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import Cookies from 'js-cookie'

const burl = import.meta.env.VITE_URL;
const filters = {
    searchKeyword: "", // Search term
    sortBy: { field: "created_at", order: "DESC" }, // Sort field and order (asc/desc)
    availability: "", // Availability filter
    category: "", // Category filter
    minPrice: 0, // Minimum price filter
    maxPrice: 2000, // Maximum price filter
    page: 1,
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

const getFilterCourse = async (fs) => {
    const res = await axios.post(`${burl}/course/filter`, fs);
    //console.log(res);
    return res.data;
}
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
    const [courseData, setCourseData] = useState();
    const [searchData, setSearchData] = useState();
    const navigate = useNavigate();



    useEffect(() => {

        const getCourse = async () => {
            const res = await getFilterCourse("/?sortBy=price&order=DESC&minPrice=0&maxPrice=2000&page=1");
            setCourseData(res);
        }
        getCourse();
    }, [])
    const handelSearch = async (e) => {
        e.preventDefault();
        //console.log(searchData);
        filters.searchKeyword = searchData;
        //console.log(filters);
        setSearchData("");
        filters.page = 1;
        let fs = generateFilterQueryString(filters);
        //GotoCourse(fs);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        //console.log(filterCourse);
        setCourseData(filterCourse);
        //console.log(fs);
    }
    const handelAvailability = async (e) => {
        filters.availability = e;
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs.substring(2, fs.length));
    }
    const handelResetAvailability = async () => {
        filters.availability = "";
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);
    }
    const handelCategory = async (e) => {
        filters.category = e;
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);
    }
    const handelResetCategory = async () => {
        filters.category = "";
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);
    }
    const handelFilterPrice = async (e) => {
        e.preventDefault();
        const fromobj = new FormData(e.target);
        const obj = Object.fromEntries(fromobj.entries());
        //console.log(obj);
        filters.minPrice = obj.minPrice;
        filters.maxPrice = obj.maxPrice;
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);

    }
    const handelResetPrice = async () => {
        filters.minPrice = 0;
        filters.maxPrice = 2000;
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);
    }
    const handelSort = async (e) => {
        let field, order;
        ////console.log(typeof e);
        field = e.substring(0, e.indexOf(","));
        order = e.substring(e.indexOf(",") + 1);
        filters.sortBy.field = field;
        filters.sortBy.order = order;
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);


    }
    const handelResetAll = async () => {
        filters.searchKeyword = "";
        filters.availability = "";
        filters.category = "";
        filters.minPrice = 0;
        filters.maxPrice = 2000;
        filters.sortBy.field = "created_at";
        filters.sortBy.order = "ASC";
        filters.page = 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);
    }
    const handelPrevPage = async () => {
        filters.page = filters.page - 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);
    }
    const handelNextPage = async () => {
        filters.page = filters.page + 1;
        //console.log(filters);
        let fs = generateFilterQueryString(filters);
        navigate(`/courses${fs}`);
        const filterCourse = await getFilterCourse(fs.substring(2, fs.length));
        setCourseData(filterCourse);
        //console.log(fs);
    }
    //console.log(courseData);

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
                        <form onSubmit={handelSearch}>
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
                                    <button type="button"
                                        className=" hover:text-gray-700 border-2 px-5 py-2 rounded-md mr-8 bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition duration-200 ease-in-out"
                                        onClick={handelSearch}
                                    >
                                        <span className="sr-only">Search</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <g fill="none" fillRule="evenodd">
                                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                <path fill="white" d="M5.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M10 2.5a7.5 7.5 0 1 0 4.136 13.757l4.803 4.804a1.5 1.5 0 0 0 2.122-2.122l-4.804-4.803A7.5 7.5 0 0 0 10 2.5" />
                                            </g>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </form>

                    </div>
                    <div className="mt-8 block lg:hidden">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 ">
                            <div className="mr-4 " >
                                <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm font-medium " onChange={(e) => handelSort(e.target.value)} >
                                    <option>Sort By</option>
                                    <option value="duration_hours,DESC">Duration, DESC</option>
                                    <option value="duration_hours,ASC">Duration, ASC</option>
                                    <option value="price,DESC">Price, DESC</option>
                                    <option value="price,ASC">Price, ASC</option>
                                    <option value="created_at,DESC">Date, DESC</option>
                                    <option value="created_at,ASC">Date, ASC</option>
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
                                    <option value="duration_hours,DESC">Duration, DESC</option>
                                    <option value="duration_hours,ASC">Duration, ASC</option>
                                    <option value="price,DESC">Price, DESC</option>
                                    <option value="price,ASC">Price, ASC</option>
                                    <option value="created_at,DESC">Date, DESC</option>
                                    <option value="created_at,ASC">Date, ASC</option>
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

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={handelResetCategory}
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
                                    (courseData == null) ? <CartColloder /> :
                                        (courseData?.data?.length > 0) ?
                                            courseData?.data.map((course) => {
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
                                            }) :
                                            <h3 className="text-2xl font-bold text-gray-700">No Course Found</h3>
                                }




                            </div>

                        </div>


                    </div>

                </div>
                <nav className="flex items-center justify-center gap-x-1 " aria-label="Pagination">
                    <button type="button" onClick={handelPrevPage} disabled={(courseData?.currentPage != 1)? false:true} className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </button>
                    <div className="flex items-center gap-x-1">
                        <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 bg-blue-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 text-white dark:focus:bg-white/10">{(courseData?.currentPage) ? courseData?.currentPage : 1}</span>
                        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">of</span>
                        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">{(courseData?.totalPages) ? courseData?.totalPages : 5}</span>
                    </div>
                    <button type="button" onClick={handelNextPage} disabled={(courseData?.currentPage != courseData?.totalPages)? false:true} className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Next">
                        <span className="sr-only">Next</span>
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                </nav>
                <div className="md:hidden w-full mx-auto left-0 fixed bottom-0">
                    <ButtomNavHome tab="Course" />
                </div>
            </section>
        </>
    )
}

export default Courseall