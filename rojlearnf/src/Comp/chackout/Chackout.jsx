import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '@/Redux/Features/Chackout/GetCartItemsSlice';
import { getCartLtemsNow } from '@/Redux/Features/Chackout/GetCartLtemsNowSlice';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const burl = import.meta.env.VITE_URL;
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';


const Chackout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.getUser.user);
    const cart = useSelector((state) => state.getCartItems.cartItems);
    //console.log(cart);
    useEffect(() => {
        if (cartItems == null && user != null) {
            dispatch(getCartItems(user._id));
        }
    }, [user]);
    //console.log(user);
    const cartItems = useSelector((state) => state.getCartItemsNow.cartItems);
    useEffect(() => {
        dispatch(getCartLtemsNow(cart));
    }, [cart])
    //console.log(cartItems)
    let total = 0;
    cartItems?.map((course) => {
        total += course.price;
    })
    const token = Cookies.get("ROJLEARN");
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }
    const onPayment = async () => {
        const userid = user._id;
        try {
            const res = await axios.post(`${burl}/cart/paymentint/${userid}`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }

            );
            const data = res.data;
            //console.log(data);
            const paymentObject = new window.Razorpay({
                key: "rzp_test_DYwio7wiUjR6Q9", // Enter the Key ID generated from the Dashboard
                order_id: data.id,
                // Amount is in paise
                ...data,
                handler: function (response) {
                    //console.log(response);
                    const options = {
                        paymentid: response.razorpay_payment_id,
                        orderid: response.razorpay_order_id,
                        signature: response.razorpay_signature
                    }
                    //console.log(options);
                    axios.post(`${burl}/cart/verify`, options, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        withCredentials: true
                    }).then(res => {
                        //console.log(res);
                        toast.success(res?.data, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        setTimeout(() => {
                            navigate("/student");
                        }, 1000);
                        //alert(res.data.message);
                    }).catch(err => {
                        //console.log(err);
                        toast.error(err.response.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    })

                }
            })
            paymentObject.open();
        } catch (error) {
            //console.log(error)
        }

    }

    useEffect(() => {
        loadScript('https://checkout.razorpay.com/v1/checkout.js')
    }, [])
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="min-w-screen min-h-screen bg-gray-50 py-5">
                <div className="px-5">
                    {/* <div className="mb-2">
                        <a href="#" className="focus:outline-none hover:underline text-gray-500 text-sm"><i className="mdi mdi-arrow-left text-gray-400"></i>Back</a>
                    </div> */}
                    <div className="mb-2">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout</h1>
                    </div>
                    {/* <div className="mb-5 text-gray-400">
                        <a href="#" className="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" className="focus:outline-none hover:underline text-gray-500">Cart</a> / <span className="text-gray-600">Checkout</span>
                    </div> */}
                </div>
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                    <div className="w-full">
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-7/12 lg:pr-10">
                                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                    {
                                        cartItems?.map((item) => {
                                            return (
                                                <div className="w-full mb-3 flex items-center">
                                                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                        <img src={item.thumbnail_url} alt="item image" />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-semibold uppercase text-gray-600">{item.title}</h6>
                                                        <p className="text-gray-400">{item.category}</p>
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold text-gray-600 text-xl">${item.price}</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200">
                                    <div className="-mx-2 flex items-end justify-end">
                                        <div className="flex-grow px-2 lg:max-w-xs">
                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                            <div>
                                                <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                                            </div>
                                        </div>
                                        <div className="px-2">
                                            <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">Subtotal</span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">Taxes (GST)</span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold">$19.09</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">Discount</span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold">- $19.09</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                    <div className="w-full flex items-center">
                                        <div className="flex-grow">
                                            <span className="text-gray-600">Total</span>
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-semibold text-gray-400 text-sm">INR</span> <span className="font-semibold">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-5/12">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="w-32">
                                            <span className="text-gray-600 font-semibold">Username</span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <span>{user?.username}</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex mb-3 items-center">
                                        <div className="w-32">
                                            <span className="text-gray-600 font-semibold">Email</span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <span>{user?.email}</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center">
                                        <div className="w-32">
                                            <span className="text-gray-600 font-semibold">Billing Address</span>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <span>{user?.address}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={onPayment} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chackout