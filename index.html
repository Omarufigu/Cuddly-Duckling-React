import { useState } from "react";
import "./styles.css";

const MENU = [
  { name: "Black Angus Burger", desc: "Classic burger with all the works", price: 15 },
  { name: "Tacos De Birria", desc: "A Meal Inspired Directly From my Culture", price: 10 },
  { name: "Sirloin Steak", desc: "Steak Prepared exactly how you like it", price: 20 }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">🦆 Cuddly Duckling</div>
      <nav>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Welcome to The Cuddly Duckling</h1>
      <p>There's a little love in every plate</p>
    </section>
  );
}

function Menu({ onAdd }) {
  return (
    <section id="menu" className="menu-section">
      <h1>Our Menu</h1>
      <table>
        <thead>
          <tr><th>Dish</th><th>Description</th><th>Price</th><th /></tr>
        </thead>
        <tbody>
          {MENU.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>${item.price}</td>
              <td>
                <button className="add-btn" onClick={() => onAdd(item)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Cart({ cart, setCart }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const removeItem = (name) => {
    setCart(cart.filter(i => i.name !== name));
  };

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.name} className="cart-item">
            {item.name} x{item.qty} - ${(item.price * item.qty).toFixed(2)}
            <button onClick={() => removeItem(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => setCart([])}>Clear Cart</button>
    </section>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const found = prev.find(i => i.name === item.name);
      if (found) {
        return prev.map(i =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  return (
    <>
      <Header />
      <Hero />
      <Menu onAdd={addToCart} />
      <Cart cart={cart} setCart={setCart} />
      <footer>
        <p>Follow us: Facebook | Instagram</p>
        <p>Open Daily: 10am – 10pm</p>
      </footer>
    </>
  );
}
