import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Features/User/UserSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { getCartItems } from '../../Redux/Features/Chackout/GetCartItemsSlice';
import { getStudentsNotifications } from '../../Redux/Features/Notifications/GetStudentsNotificationsSlice';

import avatar from '../../assets/avatar.png'
import Carts from '../chackout/Carts';
import Cartitemloder from '../utlits/loder/Cartitemloder';
import Notifications from '../addon/Notifications';
const Topnav = () => {
    const [show, setShow] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.getUser.user);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);

    const Onlogout = () => {
        dispatch(logout());
        Cookies.remove('ROJLEARN');
        navigate("/");

    }
    const cartItems = useSelector((state) => state.getCartItems.cartItems);
    const notification = useSelector((state) => state.getStudentsNotifications.notifications);

    useEffect(() => {
        if (cartItems == null && user != null) {
            dispatch(getCartItems(user._id));
        }
    }, []);
    useEffect(() => {
        if (notification == null && user != null) {
            dispatch(getStudentsNotifications(user._id));
        }
    }, [user]);
    const handelcartItems = () => {
        //console.log("cartItems");
        setShowCart(!showCart);
        setShowNotification(false);

        setTimeout(() => {
            //const cartItems = useSelector((state) => state.getCartItems.cartItems);
            //console.log(cartItems);
        }, 2000);

    }

    const handelNotification = () => {
        //console.log("notification");
        setShowNotification(!showNotification);
        setShowCart(false);
        //console.log(notification);
    }
    return (
        <>
            <div className=" cursor-default bg-gray-800 flex items-center justify-end w-auto border border-black" >
                <button className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out border-red-500 mr-4" aria-label="Notification" onClick={handelNotification}>
                    <svg className="w-6 h-6 text-white fill-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9.046 3.59-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.77c.439 2.344 2.383 2.587 2.599 3.76.11.586.22 1.171-.309 1.271L5 17.101c-.529.1-.639-.488-.749-1.074-.219-1.172 1.506-2.102 1.067-4.447l-.331-1.769a5.338 5.338 0 0 1 4.059-6.22Zm-7.13 4.602a8.472 8.472 0 0 1 2.17-5.048m2.646 13.633A3.472 3.472 0 0 0 13.46 16l.089-.5-6.817 1.277Z" />
                    </svg>

                    <span className="absolute inset-0 object-right-top -mr-6">
                        <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                            {notification ? notification.length : 0}
                        </div>
                    </span>
                </button>
                <div className={`${(showNotification) ? "block" : "hidden"} absolute z-50 top-16 right-2 overflow-hidden bg-gray-800 `}>
                    {(notification) ? <Notifications  notifications={notification} /> : <Cartitemloder />}
                </div>
                <button className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out border-red-500 mr-4" aria-label="Cart" onClick={handelcartItems}>
                    <svg className="h-6 w-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span className="absolute inset-0 object-right-top -mr-6">
                        <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                            {cartItems ? cartItems.length : 0}
                        </div>
                    </span>
                </button>
                <div className={`${(showCart) ? "block" : "hidden"} absolute z-50 top-16 right-2 overflow-hidden bg-gray-800 `}>
                    {(cartItems) ? <Carts  cartItems={cartItems} /> : <Cartitemloder />}
                </div>

                <a className="flex items-center justify-end w-fit h-16 mt-auto  hover:bg-gray-700 text-white "
                    href="#" >
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-sm text-white font-medium mr-4" onClick={() => setShow(!show)}>Account</span>
                    <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full mr-4 bg-cover bg-center" style={{ backgroundImage: `url(${(user?.profile_picture_url) ? user.profile_picture_url : avatar})` }} onClick={() => setShow(!show)} >

                        <div className={`drop-down ${(!show) ? 'hidden' : 'block'}  w-48 overflow-hidden bg-slate-600 rounded-md shadow z-50 absolute top-12 right-3`}>
                            <ul>
                                <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400" onClick={() => navigate("/settings")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                    <span> Setting </span>
                                </li>
                                <li className="px-3  py-3  text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <span> Wishlist </span>
                                </li>
                                <li className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400" onClick={Onlogout}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                    <span> Logout </span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </a>

            </div>
        </>
    )
}

export default Topnav