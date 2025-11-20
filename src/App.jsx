import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { name: "Black Angus Burger", desc: "Classic burger with all the works", price: 15 },
    { name: "Tacos De Birria", desc: "A Meal Inspired Directly From my Culture", price: 10 },
    { name: "Sirloin Steak", desc: "Steak Prepared exactly how you like it", price: 20 }
  ];

  function addToCart(item) {
    setCart(prev => {
      const found = prev.find(i => i.name === item.name);
      if (found) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeFromCart(index) {
    setCart(prev => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">🦆 Cuddly Duckling</div>
        <nav id="navbar">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="hamburger" id="hamburger">☰</div>
        </nav>
      </header>

      {/* Menu Section */}
      <section className="menu-section">
        <h1>Our Menu</h1>
        <table>
          <thead>
            <tr><th>Dish</th><th>Description</th><th>Price</th><th></th></tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="add-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Cart */}
      <section className="cart">
        <h2>Your Cart</h2>
        <ul id="cart-items">
          {cart.length === 0 && <p>No items in cart.</p>}
          {cart.map((item, i) => (
            <li key={i} className="cart-item">
              {item.name} x{item.quantity} — ${item.price * item.quantity}
              <button onClick={() => removeFromCart(i)}>Remove</button>
            </li>
          ))}
        </ul>

        <p id="cart-total">Total: ${total.toFixed(2)}</p>

        {cart.length > 0 && (
          <button id="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        )}
      </section>

      {/* Footer */}
      <footer>
        <p>Follow us:
          <a href="#">Facebook</a> |
          <a href="#">Instagram</a>
        </p>
        <p>Open Daily: 10am – 10pm</p>
      </footer>
    </div>
  );
}
