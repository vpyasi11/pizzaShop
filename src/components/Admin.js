import React, { useState } from "react";

export default function Admin({ orders, nextStage, cancelOrder }) {
  const [totalDeliveries, setTotalDeliveries] = useState(0);

  const countDeliveries = (order) => {
    setTotalDeliveries((prevTotalDeliveries) => prevTotalDeliveries + 1);    
    cancelOrder(order);
  };

  const timeLimit = (order) => {                   
    return (
      order.pizzSize === "Small" ? 180 :
        order.pizzSize === "Medium" ? 240 :
          order.pizzSize === "Large" ? 300 : 180
    );
  };

  return (
    <>
      <div className="mx-2 flex flex-row justify-center border border-2 border-solid">
        <div className="flex flex-col items-center border border-solid border-2 p-4">
          <h3 className="text-red-500 font-bold mb-4">ORDER PLACED</h3>
          {orders.map((order) => {
            return order.stage === 1 ? (
              <div key={order.id} className="border-solid border border-2 p-4 mb-4">
                <p
                  className={`text-center font-bold ${order.timeElapsed > timeLimit(order) ? "text-red-500 font-bold" : ""
                    }`}
                >
                  Order {order.id}
                </p>
                <p
                  className={`text-center ${order.timeElapsed > timeLimit(order) ? "text-red-500" : ""
                    }`}
                >
                  Time Elapsed: {Math.floor(order.timeElapsed / 60)}:
                  {(order.timeElapsed % 60).toString().padStart(2, "0")} mins
                </p>
                <div className="text-center"> 
                <button
                  onClick={() => nextStage(order)}
                  className={`px-2 py-1 rounded-md mx-auto w-1/2 mt-2 ${order.stage === 4 ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                    }`}
                >
                  Next
                </button>
                </div>
              </div>
            ) : (
              <div key={order.id}></div>
            );
          })}
        </div>

        <div className="flex flex-col items-center border border-solid border-2 p-4">
          <h3 className="text-red-500 font-bold mb-4">ORDER IN MAKING</h3>
          {orders.map((order) => {
            return order.stage === 2 ? (
              <div key={order.id} className="border-solid border border-2 p-4 mb-4">
                <p
                  className={`text-center font-bold ${order.nextStagetimeElapsed > timeLimit(order) ? "text-red-500 font-bold" : ""
                    }`}
                >
                  Order {order.id}
                </p>
                <p
                  className={`text-center ${order.nextStagetimeElapsed > timeLimit(order) ? "text-red-500" : ""
                    }`}
                >
                  Time Elapsed: {Math.floor(order.nextStagetimeElapsed / 60)}:
                  {(order.nextStagetimeElapsed % 60)
                    .toString()
                    .padStart(2, "0")}{" "}
                  mins
                </p>
                <div className="text-center">
                <button
                  onClick={() => nextStage(order)}
                  className={`px-2 py-1 rounded-md mx-auto w-1/2 mt-2 ${order.stage === 4 ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                    }`}
                >
                  Next
                </button>
                </div>
              </div>
            ) : (
              <div key={order.id}></div>
            );
          })}
        </div>

        <div className="flex flex-col items-center border border-solid border-2 p-4">
          <h3 className="text-red-500 font-bold mb-4">ORDER READY</h3>
          {orders.map((order) => {
            return order.stage === 3 ? (
              <div key={order.id} className="border-solid border border-2 p-4 mb-4">
                <p
                  className={`text-center font-bold ${order.nextStagetimeElapsed > timeLimit(order) ? "text-red-500 font-bold" : ""
                    }`}
                >
                  Order {order.id}
                </p>
                <p
                  className={`text-center ${order.nextStagetimeElapsed > timeLimit(order) ? "text-red-500" : ""
                    }`}
                >
                  Time Taken: {Math.floor(
                    (order.timeElapsed + order.nextStagetimeElapsed) / 60
                  )}
                  :{((order.timeElapsed + order.nextStagetimeElapsed) % 60)
                    .toString()
                    .padStart(2, "0")}{" "}
                  mins
                </p>
                <div className="text-center">
                <button
                  onClick={() => nextStage(order)}
                  className={`px-2 py-1 rounded-md mx-auto w-1/2 mt-2 ${order.stage === 4 ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                    }`}
                >
                  Next
                </button>
                </div>
              </div>
            ) : (
              <div key={order.id}></div>
            );
          })}
        </div>

        <div className="flex flex-col items-center border border-solid p-4">
          <h3 className="text-red-500 font-bold mb-4">ORDER PICKED</h3>
          {orders.map((order) => {
            return order.stage === 4 ? (
              <div key={order.id} className="border-solid border p-4 mb-4">
                <p className="text-center font-bold">Order {order.id}</p>
                <button
                  onClick={() => countDeliveries(order)}
                  className={`px-2 py-1 rounded-md mx-auto mt-2 ${order.stage === 4 ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                    }`}
                >
                  Click to complete order
                </button>
              </div>
            ) : (
              <div key={order.id}></div>
            );
          })}
        </div>
      </div>



      <div className="m-4">
        <table className="w-full border border-solid ">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Order ID</th>
              <th className="p-2">Stage</th>
              <th className="p-2">Total time Spent</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-2 text-center items-center justify-center">{order.id}</td>
                <td className="p-2 text-center items-center justify-center">
                  {order.stage === 1
                    ? "Order Placed"
                    : order.stage === 2
                      ? "Order in making"
                      : order.stage === 3
                        ? "Order Ready"
                        : order.stage === 4
                          ? "Order Picked"
                          : ""}
                </td>
                <td className="p-2 text-center items-center justify-center">
                  {order.stage === 1 ? (
                    <span>
                      {Math.floor(order.timeElapsed / 60)}:
                      {(order.timeElapsed % 60).toString().padStart(2, "0")} mins
                    </span>
                  ) : (
                    <span>
                      {Math.floor(
                        (order.timeElapsed + order.nextStagetimeElapsed) / 60
                      )}:
                      {((order.timeElapsed + order.nextStagetimeElapsed) % 60)
                        .toString()
                        .padStart(2, "0")}{" "}
                      mins
                    </span>
                  )}
                </td>
                <td className="p-2 text-center items-center justify-center">
                  <button
                    onClick={() => { order.stage === 4 ? countDeliveries(order) : cancelOrder(order) }}
                    className={`px-2 py-1 rounded-md ${order.stage === 4 ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                      }`}
                  >
                    {order.stage === 4 ? "Complete Order" : "Cancel"}
                  </button>
                </td>
              </tr>
            ))}
            <tr className="bg-gray-200">
              <td className="p-2">Total orders delivered</td>
              <td className="p-2">{totalDeliveries}</td>
              <td colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}