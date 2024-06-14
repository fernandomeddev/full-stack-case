import { Router } from "express";
import { removeTaskController } from "../../../controllers/task/removeTaskController";
import { updateTaskController } from "../../../controllers/task/updateTaskController";

const router = Router()
router.put('/:id', updateTaskController);
router.delete('/:id', removeTaskController);


export default router