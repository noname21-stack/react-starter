
import { useState } from "react";
import { useEffect } from "react";

import "./user-form.css";

export const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const onFirstNameChange = (event) => setFirstName(event.target.value);

  const [lastName, setLastName] = useState("");
  const onLastNameChange = (event) => setLastName(event.target.value);

  const [workAt, setWorkAt] = useState("");
  const onWorkAtChange = (event) => setWorkAt(event.target.value);

  const [school, setSchool] = useState("");
  const onSChoolChange = (event) => setSchool(event.target.value);

  const [city, setCity] = useState("");
  const onCityChange = (event) => setCity(event.target.value);

  const [country, setCountry] = useState("");
  const onCountryChange = (event) => setCountry(event.target.value);

  const [address, setAddress] = useState("");
  const onAddressChange = (event) => setAddress(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();


    let id = Math.random();
    if(props.updateUser){
      id=props.updateUser.id;
    }
    props.onSubmit({
      id,
      firstName,
      lastName,
      workAt:workAt ||undefined,
      school:school ||undefined,
      city:city ||undefined,
      country:country ||undefined,
      address:address ||undefined,

    });

    setFirstName("");
    setLastName("");
    setWorkAt("");
    setSchool("");
    setCity("");
    setAddress("");
    setCountry("");
 
  };

  const onCancel = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setWorkAt("");
    setSchool("");
    setCity("");
    setAddress("");
    setCountry("");

    props.onCancel();
  };
//  console.log(props.updateUser);
  useEffect(() => {
    if (props.updateUser) {
      setFirstName(props.updateUser.firstName ?? "");
      setLastName(props.updateUser.lastName ?? "");
      setWorkAt(props.updateUser.workAt ?? "");
      setSchool(props.updateUser.school ?? "");
      setCity(props.updateUser.city?? "");
      setCountry(props.updateUser.country ?? "");
      setAddress(props.updateUser.address ?? "");
    }
  }, [props.updateUser]);

  return (
    <div>
      <form className="user-form">
      <h1>User form</h1>
      <label htmlFor="firstName">firstName</label>
      <input
        type="text"
        name="firstName"
        id="nfirstName"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <label htmlFor="lastName">lastName</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
       value={lastName}
       onChange={onLastNameChange}
      />
      <label htmlFor="workAt">workAt</label>
      <input
        type="text"
        name="workAt"
        id="workAt"
      value={workAt}
      onChange={onWorkAtChange}
      />
      <label htmlFor="school">school</label>
      <input
        type="text"
        name="school"
        id="school"
      value={school}
      onChange={onSChoolChange}
      />
        <label htmlFor="city">city</label>
      <input
        type="text"
        name="city"
        id="city"
      value={city}
      onChange={onCityChange}
      />
        <label htmlFor="country">country</label>
      <input
        type="text"
        name="country"
        id="country"
      value={country}
      onChange={onCountryChange}
      />
        <label htmlFor="address">address</label>
      <input
        type="text"
        name="address"
        id="address"
      value={address}
      onChange={onAddressChange}
      />
   <button onClick={onSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
      
    </form>
    </div>
  );
};
