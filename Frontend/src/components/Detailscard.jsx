import React from 'react'
import {Link} from 'react-router-dom'

function Detailscard(props) {
  return (
<>
<div className="mt-10 mx-14 mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='flex flex-wrap'>
    <Link to="#">
        <img className="rounded-t-lg" src={props.src} alt="img" width="500px" />
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="p-5">
        <a href="#">
            Course Name:<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Author: <b>{props.author}</b></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration: <b>{props.duration}</b></p>
        <Link to="/student/details" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {props.button}
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
    </div>
    

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-1000 uppercase bg-gray-1000 dark:bg-gray-700 dark:text-gray-1000">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Lesson No
                </th>
                <th scope="col" className="px-6 py-3">
                    Lesson Name
                </th>
                {/* <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th> */}
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                {/* <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td> */}
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                {/* <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td> */}
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                {/* <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td> */}
            </tr>
        </tbody>
    </table>
</div>

    
</div>
</>
  )
}

export default Detailscard