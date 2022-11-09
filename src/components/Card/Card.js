import { useState } from "react";

export const Card = ({ todo, completed }) => {
  const [color, setColor] = useState("none");
  return (
    <div>
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
