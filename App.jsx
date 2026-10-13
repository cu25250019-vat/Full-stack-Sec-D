import { useState } from "react";

const products = [
  { id: 1, name: "Headphones", price: 1499 },
  { id: 2, name: "Keyboard", price: 2299 },
  { id: 3, name: "Smart Watch", price: 3499 },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <main style={{ fontFamily: "Arial", maxWidth: 850, margin: "40px auto", padding: 20 }}>
      <h1>Student Tech Shop</h1>
      <p>React state and event-handling demonstration</p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
        {products.map(product => (
          <article key={product.id} style={{ padding: 18, border: "1px solid #ddd", borderRadius: 10 }}>
            <h2>{product.name}</h2>
            <p>₹{product.price.toLocaleString("en-IN")}</p>
            <button onClick={() => setCart(current => [...current, product])}>Add to cart</button>
          </article>
        ))}
      </section>
      <h2>Cart ({cart.length})</h2>
      {cart.map((item, index) => <p key={`${item.id}-${index}`}>{item.name} — ₹{item.price}</p>)}
      <strong>Total: ₹{total.toLocaleString("en-IN")}</strong>
      <button onClick={() => setCart([])} style={{ marginLeft: 16 }}>Clear cart</button>
    </main>
  );
}
