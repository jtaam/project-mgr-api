import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  timeSheetsByProjectId,
} from "../../controllers/app/timeSheet/timesheetController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", store);
// Show
router.get("/:timeSheetId", show);
// Update
router.patch("/:timeSheetId", update);
// destroy
router.delete("/:timeSheetId", destroy);
// destroy
router.get("/project/:projectId", timeSheetsByProjectId);

export default router;
