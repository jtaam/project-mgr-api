import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  tasksByProject,
} from "../../controllers/app/task/taskController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", store);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", update);
// Destroy
router.delete("/:id", destroy);
// Tasks by project
router.get("/project/:projectSlug", tasksByProject);

export default router;