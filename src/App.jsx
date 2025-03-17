import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const employees = [
  { id: 1, name: "Akramov Muxammadbobur", position: "CEO, Bosh direktor", salary: "aniqlanmagan" },
  { id: 2, name: "Dilshod Egamnazarov", position: "Dizayner", salary: "$250" },
  { id: 3, name: "Anusher Abdumajidov", position: "Frontend dasturchi", salary: "$200" },
  { id: 4, name: "Muhammadali Baxtiyorov", position: "Frontend dasturchi", salary: "$200" },
  { id: 5, name: "Sultan", position: "Frontend dasturchi", salary: "$200" }
];

const Home = () => (
  <div className="content">
    <h2>Xodimlar ro'yxati</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>To‘liq ism</th>
          <th>Lavozim</th>
          <th>Ish haqi</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.position}</td>
            <td>{emp.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const About = () => (
  <div className="content">
    <h2>Biz haqimizda</h2>
    <p>Silicon Hub – zamonaviy IT kompaniya bo‘lib, dasturiy ta’minot ishlab chiqish, veb va mobil ilovalar yaratish, hamda startaplarni rivojlantirish bilan shug‘ullanadi. Biz mijozlarimizga yuqori sifatli va innovatsion texnologik echimlarni taqdim etamiz.</p>
  </div>
);
const Services = () => <div className="content"><h2>Xizmatlar</h2><p>Bizning taklif qiladigan xizmatlar.</p></div>;
const Contact = () => <div className="content"><h2>Aloqa</h2><p>Biz bilan bog‘lanish uchun ma'lumotlar.</p></div>;

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      <li><Link to="/">Bosh sahifa</Link></li>
      <li><Link to="/about">Biz haqimizda</Link></li>
      <li><Link to="/services">Xizmatlar</Link></li>
      <li><Link to="/contact">Aloqa</Link></li>
    </ul>
  </nav>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`container ${darkMode ? "dark" : "light"}`}>
        <header>
          <h1>Silicon-hub kompaniyamizga xush kelibsiz</h1>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer>
          <p>2025 Silicon-hub. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
