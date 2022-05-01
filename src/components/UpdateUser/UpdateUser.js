import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h3>Updating User: {user.name}</h3>
    </div>
  );
};

export default UpdateUser;
