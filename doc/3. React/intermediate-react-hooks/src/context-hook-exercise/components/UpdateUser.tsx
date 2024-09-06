import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UpdateUser = () => {
  const userContext = useContext();

  // Context Validation

  const [newUser, setNewUser] = useState<string>("");

  const handleUpdate = () => {};

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
