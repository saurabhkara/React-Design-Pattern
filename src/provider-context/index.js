import React, { createContext, useContext } from "react";

const AddressContext = createContext();

export default function Provider() {
  return (
    <AddressContext.Provider
      value={{ continent: "Asia", city: "Patna", country: "India" }}
    >
      <div>
        <Address />
      </div>
    </AddressContext.Provider>
  );
}

function Address() {
  return (
    <div>
      <p>Address::::::</p>
      <Country />
    </div>
  );
}

function Country() {
  return (
    <div>
      <p>Country:Bharat</p>
      <State />
    </div>
  );
}

function State() {
  return (
    <div>
      <p>State: Bihar</p>
      <City />
    </div>
  );
}

function City() {
  return (
    <div>
      <p>City:Patna</p>
      <Locality />
    </div>
  );
}

function Locality() {
  const data = useContext(AddressContext);
  console.log(data);
  return <div>xyzzzzzzz {data.continent}</div>;
}
