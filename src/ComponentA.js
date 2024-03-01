import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext()

export default function ComponentA() {
  const [user, setUser] = useState("Zaza")

  const trackInput = (e) => {
    setUser(e.target.value)
  }

  return (
    <div className="container">
      <h2>Component A</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
      <input value={user} onChange={trackInput}/>
    </div>
  );
}
