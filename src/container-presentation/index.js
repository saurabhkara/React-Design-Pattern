import React, { useState } from "react";
function Container() {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const DecreaseCout = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Container Presentation</p>
      <div
        style={{
          flexDirection: "row",
        }}
      >
        <Button label={"Decrease"} onClck={DecreaseCout} />
        <Count count={count} />
        <Button label={"Increase"} onClck={IncreaseCount} />
      </div>
    </div>
  );
}

function Button({ label, onClck }) {
  return (
    <div onClick={onClck}>
      <h4>{label}</h4>
    </div>
  );
}

function Count({ count }) {
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default Container;
