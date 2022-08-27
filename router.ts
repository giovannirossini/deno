import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, getUser, addUser, updateUser, deleteUser } from "./controller/user.ts";

const router = new Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;