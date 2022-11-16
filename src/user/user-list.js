

import "./user-list.css";
import { UserCard } from "./user-card";

export const UserList = (props) => {
  return (
    <>
      <h1>USERS</h1>
    <div className="user-list">
     
      {props.data.map((user) => (
        < UserCard
          key={user.id}
          {...user}
         onUpdate={props.onUpdate}
         onDelete={props.onDelete}
        ></ UserCard>
      ))}
    </div>
    </>
  
  );
};