import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const DisplayUser = () => {
  const userContext = useContext(UserContext);

  // Context Validation

  if(!userContext){
    throw new Error("Displayer must be used within a userProvider")
  }

  return (
    <h1>
      <strong>Current User</strong>:{userContext.user}
    </h1>
  );
};

export default DisplayUser;
