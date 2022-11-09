import { useState } from "react";
import "./Card.css";

export const Card = ({ todo, completed }) => {
  const [color, setColor] = useState("none");
  return (
    <div className="card">
      <h1
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {todo}
      </h1>
      <button
        style={{
          backgroundColor: color,
        }}
        onClick={() => {
          setColor("red");
        }}
      >
        test
      </button>
    </div>
  );
};
