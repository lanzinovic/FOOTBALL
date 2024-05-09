import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register-page">
      <form onSubmit={registerUser}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
