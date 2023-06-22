import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);

  function fetchUsers() {
    fetch("http://api.github.com/users")
      .then((resultado) => resultado.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-cont">
      {data.map((user) => {
        return (
          <div key={user.id} className="users">
            <h2>{user.login}</h2>
            <Link to={`/users/${user.id}`}>
              <img src={user.avatar_url} alt="imagen" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Users;
