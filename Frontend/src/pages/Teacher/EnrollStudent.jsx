import React from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from '../../components/Teacher/TeacherSidebar'

function EnrollStudent() {
  return (
    <>
    <TeacherSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-1 border-gray-100 rounded-lg dark:border-gray-700 mt-14">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-1000 uppercase bg-gray-1000 dark:bg-gray-700 dark:text-gray-1000">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Course order Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Student Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Course Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">
                    <Link
                      to="/"
                      className="mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-green-600 rounded-md"
                    >
                      View
                    </Link>
                    <Link
                      to="/"
                      className="mx-2 px-8 py-1 text-lg font-medium text-center text-white bg-red-600 rounded-md"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnrollStudent