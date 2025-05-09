import * as NotesService from "../services/NotesService";
export const createNoteController = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  try {
    const newNote = await NotesService.createNote(userId, title, content);
    res.status(201).json({
      message: "New note added successfully",
      Note: newNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add a note please try again later",
    });
  }
};
export const getNoteByuserIdController = async (req, res) => {
  const userId = req.user.id;
  try {
    const NotebyUserId = await NotesService.getNoteByUser(userId);
    res.status(200).json({
      message: "successfully fetched note by userid",
      Note: NotebyUserId,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};
export const getNoteByIdController = async (req, res) => {
  const userId = req.params.id;
  try {
    const NotebyId = await NotesService.getNoteByUser(userId);
    res.status(200).json({
      message: "successfully fetched note by id",
      Note: NotebyId,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
};
export const updateNoteController = async (req, res) => {
  const {
    params: { id },
    title,
    content,
  } = req.body;
  try {
    const updatedNote = await NotesService.updateNote(id, title, content);
    res.status(201).json({
      message: "successfully updated a Note",
      Note: updatedNote,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while updating note" });
  }
};
export const deleteNoteController = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedNote = await NotesService.deleteNote(id);
    res.status(200).json({
      message: "Note deleted successfully",
      Note: deletedNote,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while deleting Note" });
  }
};
