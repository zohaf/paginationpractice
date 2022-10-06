import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "./components/posts";
import Pagination from "./components/pagination";

function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setIsLoading(false);
    };

    fetchPost();
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  //now we need to be able to jump into any page number we click on
  // press 8 and go to currentPage of 8

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(currentPage);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-secondary mb-3">Pagination this way!</h1>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={post.length}
        paginate={paginate}
      />
      <Posts posts={currentPosts} loading={isLoading} />
    </div>
  );
}

export default App;
