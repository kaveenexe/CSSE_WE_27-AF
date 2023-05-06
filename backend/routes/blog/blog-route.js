import { Router } from "express";
import Blog from "../../models/blog/Blog.js";

const router = Router();

//add blog
router.route("/add").post((req, res) => {
  const blogName = req.body.blogName;
  const blogPlaces = req.body.blogPlaces;
  const bloggerName = req.body.bloggerName;
  const blogContent = req.body.blogContent;

  const newBlog = new Blog({
    blogName,
    blogPlaces,
    bloggerName,
    blogContent,
  });

  newBlog
    .save()
    .then(() => {
      res.json("Blog Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all blogs
router.route("/").get((req, res) => {
  Blog.find()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get specific blog
router.route("/:id").get((req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => {
        res.json(blog);
        })
        .catch((err) => {
        console.log(err);
        });
    }
);

export default router;