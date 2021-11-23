import { v4 as uuidv4 } from "uuid";
import TaskChat from "../../../models/app/TaskChat.model.js";

export const index = async (req, res) => {
  const { taskId } = req.params;
  try {
    const msgs = await TaskChat.find({ taskId: taskId });
    res.status(200).json(msgs);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const store = async (req, res) => {
  const { taskId } = req.params;
  const { createdBy, message, filePath } = req.body;

  const newTaskChat = new TaskChat({
    id: uuidv4(),
    taskId,
    createdBy,
    message,
    filePath,
  });

  try {
    const savedChatMsg = await newTaskChat.save();
    res.status(201).json(savedChatMsg);
  } catch (err) {
    res.status(500).json("Message save failed");
  }
};

export const update = async (req, res) => {
  const { messageId } = req.params.messageId;
  const { ban, bookmark } = req.body;
  res.status(200).json("update", messageId, ban, bookmark);
};

export const destroy = async (req, res) => {
  const { messageId } = req.params.messageId;
  res.status(200).json("destroy", messageId);
};