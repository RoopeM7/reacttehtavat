import React, { useState, useEffect } from "react";

const Yhdistys = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
        (res) => res.json()
      ),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
        (res) => res.json()
      ),
    ]).then(([userData, postsData]) => {
      setUser(userData);
      setPosts(postsData);
    });
  }, [userId]);

  return (
    <div>
      <h2>Käyttäjän info</h2>
      <button onClick={() => setUserId((id) => Math.max(1, id - 1))}>
        Edellinen
      </button>
      <button onClick={() => setUserId((id) => Math.min(10, id + 1))}>
        Seuraava
      </button>
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.address.city}</p>
        </div>
      )}
      <h2>Postaukset</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Yhdistys;
