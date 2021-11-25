import { v4 as uuidv4 } from "uuid";
import Project from "../../../models/app/Project.js";
import ProjectComments from "../../../models/app/ProjectComment.model.js";

export const index = async (req, res) => {
  res.send("comments");
};

export const create = async (req, res) => {
  const { projectId } = req.params;
  const { comment, commentBy } = req.body;
  try {
    const project = await Project.findOne({ id: projectId });
    await project.comments.push({
      comment: comment,
      commentBy: commentBy,
    });
    const result = await project.save();
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const store = async (req, res) => {
  const { projectId } = req.params;
  const { commentBy, comment } = req.body;

  const newProjectComment = new ProjectComments({
    id: uuidv4(),
    projectId,
    comment,
    commentBy,
  });
  try {
    const savedComment = await newProjectComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(500).json("Comment save unsuccessful.");
  }
};
