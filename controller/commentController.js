import prisma from "../db/db.config.js";

// create user

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.json({
      status: 400,
      message: "Email Already taken. please use another one",
    });
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return res.json({
    status: 200,
    data: newUser,
    message: "new User created sucessfully",
  });
};

// update user

export const updateUser = async (req, res) => {
  const { name, email, password } = req.body;

  //find data using primary key

  const userId = req.params.id;

  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });

  return res.json({
    status: 200,
    data: updateUser,
    message: "User updated sucessfully",
  });
};

// fetch users

export const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({});

  return res.json({
    status: 200,
    data: users,
    message: "Users fetched sucessfully",
  });
};

// fetch user

export const fetchUserById = async (req, res) => {
  const userId = req.params.id;

  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });

  return res.json({
    status: 200,
    data: user,
    message: "User fetched sucessfully",
  });
};

// delete user

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });
  return res.json({
    status: 200,

    message: "User deleted sucessfully",
  });
};
