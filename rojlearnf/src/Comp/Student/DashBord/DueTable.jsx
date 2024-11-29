import React from 'react'

const DueTable = () => {
    return (
        <>
        <div className='p-2'>
            <p className='font-bold'>Due Events</p>
        </div>
            <div className="flex flex-col shadow-md shadow-slate-400 mb-4 h-[200px]">
                <div className=" overflow-x-auto">
                    <div className="min-w-full inline-block align-middle border">
                        
                        <div className="overflow-hidden ">
                            <table className=" min-w-full rounded-xl ">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Company </th>
                                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> User ID </th>
                                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Type </th>
                                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Industry Type </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300 ">
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Louis Vuitton</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010510 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Customer</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Accessories</td>
                                        
                                    </tr>
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Apple</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010511 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Partner</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Electronics</td>
                                        
                                    </tr>
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Johnson</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010512 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Customer</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Telecommunications</td>
                                        
                                    </tr>
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Starbucks</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010513 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Reseller</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Retail</td>
                                        
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

export default DueTable