import React from "react";

export default function RenderProp() {
  return (
    <div>
      <ChildComponent>
        <div>
          <h3>This is Render Prop Design Patterm in React</h3>
        </div>
      </ChildComponent>
      <AnotherComponent
        funct={(num) => {
          return (
            <div>
              <h1>{num}</h1>
            </div>
          );
        }}
      />
    </div>
  );
}

function ChildComponent({ children }) {
  return <div>{children}</div>;
}

function AnotherComponent({ funct }) {
  return funct(5);
}
