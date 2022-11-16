
import "./App.css";
import { UserModule } from "./user/user-module";
import { users } from "./users-data";

function App() {
  return <UserModule initialUsers={users}></UserModule>;
}

export default App;