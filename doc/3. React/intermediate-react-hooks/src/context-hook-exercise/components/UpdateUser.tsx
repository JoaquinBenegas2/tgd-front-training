import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UpdateUser = () => {
  const userContext = useContext(UserContext);

  // Context Validation

  if(!userContext){
    throw new Error("UpdateUser must be used within a UserProvider")
  }


  const [newUser, setNewUser] = useState<string>("");

  const handleUpdate = () => {
    userContext.setUser(newUser);
    setNewUser("");
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter new user name"
      />
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
};

export default UpdateUser;
