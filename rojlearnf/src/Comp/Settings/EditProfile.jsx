import React from 'react'
import { useState } from 'react'

const EditProfile = ({ user }) => {
    const [isSave, setIsSave] = useState(false);

    return (
        <>
            <div class="my-4 border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
                <div class="flex flex-col border-b py-4 sm:flex-row sm:items-start">
                    <div class="shrink-0 mr-auto sm:py-3">
                        <p class="font-medium">Account Details</p>
                        <p class="text-sm text-gray-600">Edit your account details</p>
                    </div>
                    <button class="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
                    <button disabled={!isSave} class={` ${isSave ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"} hidden rounded-lg border-2 border-transparent px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring `}>Save Changes</button>
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                        Username
                                    </label>
                                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={user?.username} />
                                </div>
                            </div>
                            {/* <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                        Email address
                                    </label>
                                    <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com" />
                                </div>
                            </div> */}
                            {/* <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                        First Name
                                    </label>
                                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" />
                                </div>
                            </div> */}
                            {/* <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                        Last Name
                                    </label>
                                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" />
                                </div>
                            </div> */}
                            <div class="w-full lg:w-6/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                        Phone No.
                                    </label>
                                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={user?.phone_number} />
                                </div>
                            </div>
                        </div>

                        <hr class="mt-6 border-b-1 border-blueGray-300" />

                        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Contact Information
                        </h6>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-12/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                        Address
                                    </label>
                                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={user?.address} />
                                </div>
                            </div>
                            {/* <div class="w-full lg:w-4/12 px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    City
                                </label>
                                <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York" />
                            </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Country
                                </label>
                                <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States" />
                            </div>
                        </div>
                        <div class="w-full lg:w-4/12 px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                    Postal Code
                                </label>
                                <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code" />
                            </div>
                        </div> */}
                        </div>

                        {/* <hr class="mt-6 border-b-1 border-blueGray-300">

                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    About Me
                                </h6>
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-12/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                About me
                                            </label>
                                            <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"> A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
                                        </div>
                                    </div>
                                </div> */}
                        <hr class="mt-6 border-b-1 border-blueGray-300" />

                        <div class="flex flex-col gap-4 py-4  lg:flex-row">
                            <div class="shrink-0 w-32  sm:py-4">
                                <p class="mb-auto font-medium">Avatar</p>
                                <p class="text-sm text-gray-600">Change your avatar</p>
                            </div>
                            <div class="flex h-56 w-[60%] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
                                <img src={user?.profile_picture_url} class="h-20 w-20 rounded-full" />
                                <p class="text-sm text-gray-600">Drop your desired image file here to start the upload</p>
                                <input type="file" class="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1" />
                            </div>
                        </div>
                    </form>
                </div>

                <div class="flex justify-end py-4 sm:hidden">
                    <button class="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
                    <button disabled={!isSave} class={`${isSave ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"} rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring`}>Save</button>
                </div>
            </div>

        </>
    )
}

export default EditProfile