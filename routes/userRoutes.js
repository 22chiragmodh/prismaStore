import { Router } from "express";
const router = Router();

import {
  createUser,
  updateUser,
  fetchUsers,
  fetchUserById,
  deleteUser,
} from "../controller/userController.js";

router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.get("/fetchUsers", fetchUsers);
router.get("/fetchUserById/:id", fetchUserById);
router.delete("/deleteUser/:id", deleteUser);

export default router;
