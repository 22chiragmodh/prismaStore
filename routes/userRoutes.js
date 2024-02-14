import { Router } from "express";

import {
  createUser,
  updateUser,
  fetchUsers,
  fetchUserById,
  deleteUser,
} from "../controller/userController.js";
const router = Router();

router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.get("/fetchUsers", fetchUsers);
router.get("/fetchUserById/:id", fetchUserById);
router.delete("/deleteUser/:id", deleteUser);

export default router;
