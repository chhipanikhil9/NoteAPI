const express = require("express");
const { getNotes, deleteNote,createNote,updateNote } = require("../controllers/noteControllers");
const auth = require("../middlewares/auth")
const noteRouter = express.Router();

noteRouter.get("/",auth,getNotes);// get all the notes belongs to the user

noteRouter.post("/",auth,createNote);// create a new note

noteRouter.delete("/:id",auth,deleteNote);// delete note with id = notes id

noteRouter.put("/:id",auth,updateNote);// update note with id = notes id

module.exports = noteRouter;