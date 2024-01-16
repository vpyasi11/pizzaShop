import './App.css';
import adminpanel from './component/adminpanel';
import form from "./component/form"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function App() {

  const [open, setOpen] = useState(true)
  const [order, setOrder] = useState(false)

  const cancelButtonRef = useRef(null)
  const pizzaType = useRef(null)
  const pizzSize = useRef(null)
  const pizzBase = useRef(null)
  const orderId = 0
  const orders = [
    {id:1, stage:1},
    {id:2, stage:1},
    {id:3, stage:3},
    {id:4, stage:4},
    {id:5, stage:2},
    {id:6, stage:1}
    ]

  const placeOrder = () =>{ 
    
    orderId = orderId + 1
    orders.push(orderId)
  }

  return (
    <>
      


        <div className='flex w-max '>
            
          {orders.map((order)=>{
            order.stage == 1 ? <div className='w-1/4 h-fit border-solid border-black border-2'>
              <p>order placed</p>
              <p>order.id</p>
              <button>next</button>
              </div> : 
            order.stage == 2 ? <div className='w-1/4 border-solid border-black border-2'>
              <p>order in making</p>
              <p>order.id</p>
              <button>next</button>
            </div> : 
            order.stage == 3 ? <div className='w-1/4 border-solid border-black border-2'>
              <p>order ready</p>
              <p>order.id</p>
              <button>next</button>
            </div> : 
            order.stage == 4 ? <div className='w-1/4 border-solid border-black border-2'>
              <p>order picked</p>
              <p>order.id</p>
              <button>next</button>
            </div> : <div></div>
          })}
            
        </div>

      <button className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"  onClick={()=>{setOrder(true);setOpen(true)}}>Order Now</button>


    {order ? <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex h-max justify-center p-4 text-center sm:items-center sm:p-0">
              <div>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 b">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <img src='https://static-00.iconduck.com/assets.00/pizza-icon-2048x2048-vk14rowe.png' className="h-12 w-12" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Create your Pizza
                        </Dialog.Title>

                      </div>
                    </div>
                  </div>


                  <form>
                    <div className="space-y-12 mx-6 w-3/4">
                      <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 flex flex-col">
                          <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                              Pizza Type
                            </label>
                            <div className="mt-2">
                              <select
                                id="pizzaType"
                                name="pizzaType"
                                ref={pizzaType}
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
                                ref={pizzSize}
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
                                ref={pizzBase}
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

                    <div className="m-6 flex items-center  gap-x-6">
                      
                      <button
                        onClick={placeOrder()}
                        className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                      >
                        Order
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root> : <div></div>}
      
    </>
  );
}

export default App;
