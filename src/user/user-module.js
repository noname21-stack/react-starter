
import { useState } from "react";
import { UserList} from "./user-list";
import { UserForm } from "./user-form";
export const UserModule = (props) => {

  const [users, setUsers] = useState(props.initialUsers ?? []);
  const [updateUser,setUpdateUser] = useState(null);


  const onUserUpdateClick = (user) => {
    console.log("update this user", user);
    setUpdateUser(user);
  };

  const onUserSubmit = (user) => {
    console.log(user);
    if (updateUser) {
      setUsers(
        users.map((p) => {
          if (p.id === user.id) {
            return { ...p, ...user};
          }
          return p;
        })
      );

      setUpdateUser(null);
    } else {
      setUsers([user, ...users]);
    }
  }

  const onUserDeleteClick = (user) => {
    const wantToDeleted = window.confirm("Do you want to delete?");
    if (wantToDeleted) {
      setUsers(
        users.filter((p) => {
          return p.id !== user.id;
        })
      );
    }
  };

  return (
    <div className="App">
       <div className="list">
       <UserList
        data={users}
        onUpdate={onUserUpdateClick}
        onDelete={onUserDeleteClick}

      ></UserList>
       </div>
     <div className="Form">
     <UserForm
        onSubmit={onUserSubmit}
      //  onCancel={onProductFormCancel}
      updateUser={updateUser}
      ></UserForm>
     </div>
  
    </div>
  );
};