import React, { useState, useEffect } from "react";

const Postaukset = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) =>
        console.error("ISO ISO VIRHE Postauksien etsinnässä:", error)
      );
  }, []);

  return (
    <div>
      <h2>Postaukset!!!!!!!!!</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Postaukset;
