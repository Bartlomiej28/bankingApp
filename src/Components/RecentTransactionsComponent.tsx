import React from 'react'

function RecentTransactionsComponent() {
  return (
    <div className='w-full h-auto bg-slate-50 rounded-2xl p-4'>
        <p className='text-2xl font-semibold'>Recent Transactions:</p>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className='bg-green-100'>
                    
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        $100                    
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-sm">Processing</span>
                    </td>
                    <th>
                    <button className="btn btn-ghost btn-xs">07.08.2024</button>
                    </th>
                    <td>
                        <p>Subsctiptions</p>
                    </td>
                </tr>
                {/* row 2 */}

                <tr className='bg-red-50'>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    $50             
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-sm">Success</span>
                    </td>
                    <th>
                    <button className="btn btn-ghost btn-xs">01.08.2024</button>
                    </th>
                    <td>
                        <p>Groceries</p>
                    </td>
                </tr>


                {/* row 3 */}
                <tr className='bg-green-100'>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        $78
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-sm">Success</span>
                    </td>
                    <th>
                    <button className="btn btn-ghost btn-xs">29.07.2024</button>
                    </th>
                    <td>
                        <p>Deposit</p>
                    </td>
                </tr>
                {/* row 4 */}
                <tr className='bg-green-100'>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Wyman-Ledner
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-sm">Success</span>
                    </td>
                    <th>
                    <button className="btn btn-ghost btn-xs">25.07.2024</button>
                    </th>
                    <td>
                        <p>Food and dining</p>
                    </td>
                </tr>

                <tr className='bg-red-50'>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                    </td>
                    <td>Red</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                



                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Category</th>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default RecentTransactionsComponent