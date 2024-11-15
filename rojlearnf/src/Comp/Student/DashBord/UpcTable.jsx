import React from 'react'

const UpcTable = () => {
    return (
        <>
            <table class=" divide-y divide-gray-200 border border-red-700">
                <thead>
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">Jane Doe</td>
                        <td class="px-6 py-4 whitespace-nowrap">jane@example.com</td>
                        <td class="px-6 py-4 whitespace-nowrap">Admin</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                        </td>
                        
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
                        <td class="px-6 py-4 whitespace-nowrap">john@example.com</td>
                        <td class="px-6 py-4 whitespace-nowrap">User</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UpcTable