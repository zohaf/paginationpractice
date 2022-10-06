import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "./components/posts";

function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setIsLoading(false);
    };

    fetchPost();
  }, []);

  console.log("whats happening here", post);

  return (
    <div className="container mt-5">
      <h1 className="text-secondary mb-3">Pagination this way!</h1>
      <Posts posts={post} loading={isLoading} />
    </div>
  );
}

export default App;
