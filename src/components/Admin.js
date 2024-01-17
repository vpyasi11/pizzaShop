import React, { useState } from "react";

export default function Admin({ orders, nextStage, cancelOrder }) {
  const [totalDeliveries, setTotalDeliveries] = useState(0);

  const countDeliveries = (order) => {
    const ordersPicked = orders.filter((order) => order.stage === 4);
    setTotalDeliveries(ordersPicked.length);
    cancelOrder(order);
  };

  return (
    <>
      <div className="mx-2 flex flex-row justify-center border border-2 border-solid">
        <div className="flex flex-col items-center border border-solid border-2">
          <h3 className="text-red-500">Order Placed</h3>
          {orders.map((order) => {
            return order.stage === 1 ? (
              <div key={order.id} className="border-solid border border-2">
                <p
                  className={`text-center ${
                    order.timeElapsed > 180 ? "text-red-500" : ""
                  }`}
                >
                  Order {order.id}
                </p>
                <p
                  className={`text-center ${
                    order.timeElapsed > 180 ? "text-red-500" : ""
                  }`}
                >
                  Time Elapsed: {Math.floor(order.timeElapsed / 60)}:
                  {(order.timeElapsed % 60).toString().padStart(2, "0")} mins
                </p>
                <button onClick={() => nextStage(order)}>next</button>
              </div>
            ) : (
              <div key={order.id}></div>
            );
          })}
        </div>

        <div className="flex flex-col items-center border border-solid border-2">
          <h3 className="text-red-500">Order in making</h3>
          {orders.map((order) => {
            return order.stage === 2 ? (
              <div key={order.id} className="border-solid border border-2">
                <p
                  className={`text-center ${
                    order.nextStagetimeElapsed > 180 ? "text-red-500" : ""
                  }`}
                >
                  Order {order.id}
                </p>
                <p
                  className={`text-center ${
                    order.nextStagetimeElapsed > 180 ? "text-red-500" : ""
                  }`}
                >
                  Time Elapsed: {Math.floor(order.nextStagetimeElapsed / 60)}:
                  {(order.nextStagetimeElapsed % 60)
                    .toString()
                    .padStart(2, "0")}{" "}
                  mins
                </p>
                <button onClick={() => nextStage(order)}>next</button>
              </div>
            ) : (
              <div key={order.id}></div>
            );
          })}
        </div>

        <div className="flex flex-col items-center border border-solid border-2">
          <h3 className="text-red-500">Order ready</h3>
          {orders.map((order) => {
            return order.stage === 3 ? (
              <div key={order.id} className="border-solid border border-2">
                <p
                  className={`text-center ${
                    order.nextStagetimeElapsed > 180 ? "text-red-500" : ""
                  }`}
                >
                  Order {order.id}
                </p>
                <p
                  className={`text-center ${
                    order.nextStagetimeElapsed > 180 ? "text-red-500" : ""
                  }`}
                >
                  Time Elapsed: {Math.floor(order.nextStagetimeElapsed / 60)}:
                  {(order.nextStagetimeElapsed % 60)
                    .toString()
                    .padStart(2, "0")}{" "}
                  mins
                </p>
                <button onClick={() => nextStage(order)}>next</button>
              </div>
            ) : (
              <div key={order.id}></div>
            );
          })}
        </div>

        <div className="flex flex-col items-center border border-solid border-2">
          <h3>Order Picked</h3>
          {orders.map((order) => {
            return order.stage === 4 ? (
              <div className="border-solid border border-2">
                <p className="text-center">Order {order.id}</p>
                <button onClick={() => countDeliveries(order)}>Picked</button>
              </div>
            ) : (
              <div></div>
            );
          })}
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Stage</th>
              <th>Total time Spent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.id}</td>
                <td>
                  {order.stage == 1
                    ? "Order Placed"
                    : order.stage == 2
                    ? "Order in making"
                    : order.stage == 3
                    ? "Order Ready"
                    : order.stage == 4
                    ? "Order Picked"
                    : ""}
                </td>
                {order.stage == 1 ? (
                  <td>
                    {" "}
                    {Math.floor(order.timeElapsed / 60)}:
                    {(order.timeElapsed % 60).toString().padStart(2, "0")} mins
                  </td>
                ) : (
                  <td>
                    {" "}
                    {Math.floor(
                      (order.timeElapsed + order.nextStagetimeElapsed) / 60
                    )}
                    :
                    {((order.timeElapsed + order.nextStagetimeElapsed) % 60)
                      .toString()
                      .padStart(2, "0")}{" "}
                    mins
                  </td>
                )}

                <td>
                  <button onClick={() => cancelOrder(order)}>Cancel</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>total orders delivered</td>
              <td>{totalDeliveries}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
