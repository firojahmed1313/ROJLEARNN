import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseDetailsData } from '../../Redux/Features/Course/getCourseDetailsSlice'
import { getCartLtemsNow } from '@/Redux/Features/Chackout/GetCartLtemsNowSlice';
import { Link } from 'react-router-dom';



const Cartitemloder = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.getCartItemsNow.cartItems);
    console.log(cartItems);
    //console.log(course);
    useEffect(() => {
        dispatch(getCartLtemsNow(item));
    }, [item])
    let total = 0;
    cartItems?.map((course) => {
        total = total + course.price;
    })
    return (
        <>
    <ul className="space-y-4">
        {
            cartItems?.map((course) => (
                <li className="flex items-center justify-between gap-4 ">
                    <img
                        src={course?.thumbnail_url}
                        alt=""
                        className="size-16 rounded object-cover"
                    />

                    <div className="min-w-0 flex-auto">
                        <h3 className="text-sm ">{course?.title}</h3>

                        <dl className="mt-0.5 space-y-px text-[10px] ">
                            <div>
                                <dt className="inline">Price : </dt>
                                <dd className="inline">${(course?.price)?.toFixed(2)}</dd>
                            </div>
                            <div>
                                <dt className="inline">Catagory : </dt>
                                <dd className="inline">{course?.category}</dd>
                            </div>
                        </dl>
                    </div>
                    <button className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>

                </li>
            ))
        }

    </ul>
    <div className="mt-8 flex justify-evenly border-t border-gray-100 pt-8">
                                    <div className="w-fit min-w-sm max-w-lg space-y-4">
                                        <dl className="space-y-0.5 text-sm ">
                                            <div className="flex justify-between">
                                                <dt>Subtotal</dt>
                                                <dd>{total.toFixed(2)}</dd>
                                            </div>

                                            <div className="flex justify-between">
                                                <dt>VAT</dt>
                                                <dd>25</dd>
                                            </div>

                                            <div className="flex justify-between">
                                                <dt>Discount</dt>
                                                <dd>-25</dd>
                                            </div>

                                            <div className="flex justify-between !text-base font-medium">
                                                <dt>Total</dt>
                                                <dd>{total.toFixed(2)}</dd>
                                            </div>
                                        </dl>

                                        <div className="flex justify-end">
                                            <span
                                                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="-ms-1 me-1.5 size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                                    />
                                                </svg>

                                                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                                            </span>
                                        </div>

                                        <div className="flex justify-end">
                                            <Link
                                                to={'/cardCackout'}
                                                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                            >
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
        </>
        
    )
}

export default Cartitemloder