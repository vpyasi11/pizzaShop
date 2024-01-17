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
      
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-between mx-6 space-y-6 mb-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-6 mb-4 sm:mb-0">
          <label
            htmlFor="pizzaType"
            className="block text-base font-bold leading-6 text-gray-900"
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

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
          <label
            htmlFor="size"
            className="block text-base font-bold leading-6 text-gray-900"
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

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
          <label
            htmlFor="base"
            className="block text-base font-bold leading-6 text-gray-900"
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

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <button
            type="submit"
            disabled={orders.length > 10}
            className={`w-full rounded-md px-4 py-2 text-sm font-semibold ${
              orders.length < 10
                ? "bg-red-500 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                : "bg-gray-300 text-gray-700 cursor-not-allowed"
            }`}
          >
            {orders.length < 10 ? "ORDER NOW !" : "Not taking any orders for now"}
          </button>
        </div>
      </form>
    </>
  );
}
