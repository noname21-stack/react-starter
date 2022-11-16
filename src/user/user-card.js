
import "./user.css";

export const UserCard = (props) => {
  const getUser = () => {
    return {
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        school: props.school,
      workAt:props.workAt,
      city:props.city,
      country:props.country,
      address:props.address
    };
  };
  const onUpdate=() =>{
    props.onUpdate(getUser());
  }
  const onDelete=() =>{
    props.onDelete({
      id:props.id,  
    });
  }
  // const onAdd =()=>{
  //   props.onAdd(getUser());
  // }
  return (
    <div className="user-container">
      {/* <div className="user-img">
        <img src={props.img ?? "user-placeholder.jpg"} alt="" />
      </div> */}
      <div className="user-info">
       <div className="user-left "> <div className="user-firstName">First name: {props.firstName}</div>
        <div className="user-lastName">Last name: {props.lastName}</div>
        <div className="user-school">School: {props.school}</div>
        <div className="user-workAt">WorkAt: {props.workAt}</div>
        </div>

        <div className="user-right" >
        <div className="user-city">City: {props.city}</div>
        <div className="user-country">Country: {props.country}</div>
        <div className="user-address">Address: {props.address}</div>
        </div>
       
        {props.onUpdate && <button onClick={onUpdate}>Update</button>}
        {props.onDelete && <button onClick={onDelete}>Delete</button>}

      </div>
    </div>
  );
};