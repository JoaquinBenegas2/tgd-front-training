import DisplayUser from "./components/DisplayUser";
import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./context/UserContext";

import "./ContextApp.css";

const ContextApp = () => {
  return (
      <UserProvider>
        <div className="App">
          <DisplayUser />
          <UpdateUser />
        </div>
      </UserProvider>
  );
};

export default ContextApp;
