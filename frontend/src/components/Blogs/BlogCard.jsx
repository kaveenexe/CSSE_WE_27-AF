import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function BlogCard() {

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/blog")
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Card>
        {blog.map((blog) => (
        <div key={blog._id}>
        <Card.Header as="h5">{blog.blogName}</Card.Header>
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{blog.blogPlaces}</Card.Subtitle>
          <Card.Text>
            {blog.blogContent}
          </Card.Text>
          <footer className="blockquote-footer">
            by {blog.bloggerName} 
          </footer>
        </Card.Body>
        </div>
        ))}
      </Card>
    </div>
  );
}
