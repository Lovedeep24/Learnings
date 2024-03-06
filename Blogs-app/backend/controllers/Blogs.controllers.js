const BlogModel = require("../models/Blog.model");

async function getAllBlogs(req, res) {
  try {
    const Blogs = await BlogModel.find({});
    res.status(200).json(Blogs);
  } catch (error) {
    res.status(400).json("something went wrong");
  }
}
async function createBlog(req, res) {
  try {
    // document : row
    const Blog = await BlogModel.create(req.body);
    res.status(201).json(Blog);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function getSingleBlog(req, res) {
  const id = req.params.id;
  try {
    const Blog = await BlogModel.findOne({ _id: id });
    // blank
    if (!Blog) {
      res.status(404).json(`No Blog with id ${id}`);
    } else {
      res.status(200).json(Blog);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function updateBlog(req, res) {
  const id = req.params.id;
  try {
    const Blog = await BlogModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!Blog) {
      res.status(404).json(`No Blog with id ${id}`);
    } else {
      res.status(200).json(Blog);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
async function deleteBlog(req, res) {
  const id = req.params.id;
  try {
    const Blog = await BlogModel.findOneAndDelete({ _id: id });
    if (!Blog) {
      res.status(400).json(`No Blog with id ${id}`);
    } else {
      res.status(200).json(Blog);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports = {
  getAllBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
