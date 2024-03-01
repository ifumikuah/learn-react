import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

export default function ComponentB() {
  const user = useContext(UserContext)

  return (
    <div className="container">
      <p>My name is {user}</p>
    </div>
  );
}
