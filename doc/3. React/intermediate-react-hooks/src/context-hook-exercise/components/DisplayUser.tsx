import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const DisplayUser = () => {
  const userContext = useContext();

  // Context Validation

  return (
    <h1>
      <strong>Current User</strong>:
    </h1>
  );
};

export default DisplayUser;
