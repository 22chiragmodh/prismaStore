import prisma from "../db/db.config.js";

// create user

export const createPost = async (req, res) => {
  const { user_id, title, description } = req.body;

  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title: title,
      description: description,
    },
  });

  return res.json({
    status: 200,
    data: newPost,
    message: "new Post created sucessfully",
  });
};

// update user

export const updatePost = async (req, res) => {
  const { user_id, title, description } = req.body;

  //find data using primary key

  const postId = req.params.id;

  await prisma.post.update({
    where: {
      id: Number(postId),
    },
    data: {
      user_id,
      title,
      description,
    },
  });

  return res.json({
    status: 200,

    message: "post updated sucessfully",
  });
};

// fetch users

export const fetchPosts = async (req, res) => {
  const posts = await prisma.post.findMany({});

  return res.json({
    status: 200,
    data: posts,
    message: "Posts fetched sucessfully",
  });
};

// fetch user

export const fetchPostById = async (req, res) => {
  const postId = req.params.id;

  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.json({
    status: 200,
    data: post,
    message: "post fetched sucessfully",
  });
};

// delete user

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  await prisma.post.delete({
    where: {
      id: Number(postId),
    },
  });
  return res.json({
    status: 200,

    message: "Post deleted sucessfully",
  });
};
