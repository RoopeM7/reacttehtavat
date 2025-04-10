import React, { useState, useEffect } from "react";

const Etsikayttaja = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      <input
        type="number"
        value={userId}
        min="1"
        max="10"
        onChange={(e) => setUserId(e.target.value)}
      />
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default Etsikayttaja;
