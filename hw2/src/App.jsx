import "./App.css";
import Greeting from "./components/Greeting.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import OrderStatus from "./components/OrderStatus.jsx";

// function App() {
//   return <Greeting name="Anastasiia"></Greeting>;
// }

// function App() {
//   const items = ["bread", "milk", "apple"];
//   return <ShoppingList items={items} />;
// }

function App() {
  const orders = [
    { orderId: 123, status: "In road" },
    { orderId: 321, status: "Upload" },
    { orderId: 456, status: "Delivered" },
  ];

  return (
    <div>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
