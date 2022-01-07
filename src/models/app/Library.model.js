import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
  name: { type: String },
});

const Library = mongoose.model("Library", LibrarySchema);

export default Library;
