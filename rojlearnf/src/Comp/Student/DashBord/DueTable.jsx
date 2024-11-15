import React from 'react'

const DueTable = () => {
    return (
        <>
            <div class="flex flex-col border border-green-700 mb-4">
                <div class=" overflow-x-auto">
                    <div class="min-w-full inline-block align-middle">
                        
                        <div class="overflow-hidden ">
                            <table class=" min-w-full rounded-xl">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Company </th>
                                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> User ID </th>
                                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Type </th>
                                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Industry Type </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-300 ">
                                    <tr class="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Louis Vuitton</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010510 </td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Customer</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Accessories</td>
                                        
                                    </tr>
                                    <tr class="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Apple</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010511 </td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Partner</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Electronics</td>
                                        
                                    </tr>
                                    <tr class="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Johnson</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010512 </td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Customer</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Telecommunications</td>
                                        
                                    </tr>
                                    <tr class="bg-white transition-all duration-500 hover:bg-gray-50">
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Starbucks</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> 20010513 </td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Reseller</td>
                                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Retail</td>
                                        
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