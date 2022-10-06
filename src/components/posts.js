import React from "react";

export default function Posts({ posts, loading }) {
  if (loading) {
    <h2>loading..</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post, index) => (
        <li key={index} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
}
