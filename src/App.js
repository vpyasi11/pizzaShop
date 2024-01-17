import "./styles.css";
import Admin from "./components/Admin";
import PizzaForm from "./components/PizzaForm";
import "./tailwind.output.css";
import { useState } from "react";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [orderTimers, setOrderTimers] = useState({});
  const [open, setOpen] = useState(false);
  const [id, setID] = useState(0);

  const nextStage = (orderStageToChange) => {
    const updatedStageOrder = orders.map((order) => {
      if (order.id === orderStageToChange.id && order.stage <= 4) {
        return { ...order, stage: order.stage + 1, nextStageTime: Date.now() };
      } else {
        return order;
      }
    });

    setOrders(updatedStageOrder);

    setOrderTimers((prevTimers) => ({
      ...prevTimers,
      [orderStageToChange.id]: setInterval(() => {
        setOrders((prevOrders) => {
          const updatedOrders = prevOrders.map((order) =>
            order.id === orderStageToChange.id && order.stage === 2
              ? {
                  ...order,
                  nextStagetimeElapsed: Math.floor(
                    (Date.now() - order.nextStageTime) / 1000
                  ),
                }
              : order
          );
          return updatedOrders;
        });
      }, 1000),
    }));
  };

  const cancelOrder = (orderToCancel) => {
    if (orderToCancel.stage < 3) {
      // Clear the timer associated with the canceled order
      clearInterval(orderTimers[orderToCancel.id]);

      // Update the order list
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderToCancel.id)
      );
    }
  };

  const generateID = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const placeOrder = (details) => {
    if (orders.length < 10) {
      const orderId = generateID();
      setOrders([
        ...orders,
        { ...details, id: orderId, stage: 1, time: Date.now() },
      ]);

      // Set a timer for the new order
      setOrderTimers((prevTimers) => ({
        ...prevTimers,
        [orderId]: setInterval(() => {
          setOrders((prevOrders) => {
            const updatedOrders = prevOrders.map((order) =>
              order.id === orderId && order.stage === 1
                ? {
                    ...order,
                    timeElapsed: Math.floor((Date.now() - order.time) / 1000),
                  }
                : order
            );
            return updatedOrders;
          });
        }, 1000),
      }));
    } else {
      alert("Not taking any orders for now");
    }
  };

  return (
    <>
      <button>Order Pizza</button>
      <PizzaForm orders={orders} placeOrder={placeOrder} />
      <Admin orders={orders} nextStage={nextStage} cancelOrder={cancelOrder} />
    </>
  );
}
