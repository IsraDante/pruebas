import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  let { id } = useParams();
  const [data, setData] = useState({});

  function fetchUsers() {
    fetch(`http://api.github.com/users/${id}`)
      .then((resultado) => resultado.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchUsers();
  }, [id]);

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="imagen" />
    </div>
  );
}

export default UserDetails;
