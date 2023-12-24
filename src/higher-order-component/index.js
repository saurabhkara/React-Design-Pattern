import React from "react";

const HOC = withConsoleComp(PrintComp);

export default function HigherOrder() {
  return (
    <div>
      <HOC special={"**"} />
    </div>
  );
}

function PrintComp({ special }) {
  return (
    <div>
      <h1>Print component {special}</h1>
    </div>
  );
}

function withConsoleComp(Component) {
  console.log("Console from Higher Order Component");
  return function (props) {
    return (
      <div>
        <p>With Special feature</p>
        <Component {...props} />
      </div>
    );
  };
}
