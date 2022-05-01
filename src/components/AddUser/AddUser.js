import React from "react";
const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!");
        event.target.reset();
      });
  };

  return (
    <div>
      <h3>please add a new user</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" required /> <br />
        <input type="email" name="email" placeholder="Email" required /> <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
