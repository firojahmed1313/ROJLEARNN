import React from 'react'

const UpcTable = () => {
    return (
        <>
            <div className='p-2'>
                <p className='font-bold'>Upcoming Events</p>
            </div>
            <div className="flex flex-col shadow-md shadow-slate-400 mb-4 h-[200px]">
                <div className=" overflow-x-auto">
                    <div className="min-w-full inline-block align-middle">

                        <div className="overflow-hidden ">
                            <table className=" divide-y divide-gray-200 min-w-full rounded-xl">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
                                        <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Admin</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                                        <td className="px-6 py-4 whitespace-nowrap">User</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                                        <td className="px-6 py-4 whitespace-nowrap">User</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                                        <td className="px-6 py-4 whitespace-nowrap">User</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcTable