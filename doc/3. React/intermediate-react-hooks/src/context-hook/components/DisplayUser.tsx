import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const DisplayUser = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("DisplayUser must be used within a UserProvider");
  }

  return (
    <h1>
      <strong>Current User</strong>: {userContext.user}
    </h1>
  );
};

export default DisplayUser;
