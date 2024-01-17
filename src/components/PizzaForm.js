import React, { useRef } from "react";

export default function PizzaForm({ placeOrder, orders }) {
  const pizzaType = useRef(null);
  const pizzSize = useRef(null);
  const pizzBase = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    placeOrder(
      pizzaType.current.value,
      pizzBase.current.value,
      pizzSize.current.value
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 mx-6 w-3/4">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 flex flex-col">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
                <label
                  htmlFor="Size"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
                <label
                  htmlFor="base"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
            type="submit"
            disabled={orders.length > 10}
            className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            {orders.length < 10 ? "Order" : "Not taking any orders for now"}
          </button>
        </div>
      </form>
    </>
  );
}
