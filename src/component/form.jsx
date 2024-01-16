import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function form() {
  return (
    <>
        <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Choose your pizza</h2>
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Pizza Type
              </label>
              <div className="mt-2">
                <select
                  id="pizzaType"
                  name="pizzaType"
                  autoComplete="type-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Veg</option>
                  <option>Non-Veg</option>
                </select>

              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Size" className="block text-sm font-medium leading-6 text-gray-900">
                Size
              </label>
              <div className="mt-2">
                <select
                  id="size"
                  name="size"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>

              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="base" className="block text-sm font-medium leading-6 text-gray-900">
                Base
              </label>
              <div className="mt-2">
                <select
                  id="base"
                  name="base"
                  autoComplete="base-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Thin</option>
                  <option>Thick</option>
                  
                </select>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </>
  )
}
