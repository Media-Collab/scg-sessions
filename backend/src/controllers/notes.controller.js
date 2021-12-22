const notesController = {};

const NoteModel = require("./../models/Note.model");

notesController.getNotes = async (req, res) => {
  const notesDB = await NoteModel.find();
  res.json(notesDB);
};

notesController.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new NoteModel({ title, content, date, author });
  await newNote.save();

  res.json({
    message: "Note saved",
  });
};

notesController.getNote = async (req, res) => {
  const { id } = req.params;
  const note = await NoteModel.findById(id);

  res.json(note);
};

notesController.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  const { id } = req.params;
  await NoteModel.findOneAndUpdate(
    { _id: id },
    {
      title,
      content,
      author,
      date,
    }
  );

  res.json({
    message: "Note updated",
  });
};

notesController.deleteNote = async (req, res) => {
  const { id } = req.params;
  await NoteModel.findByIdAndDelete(id);
  res.json({
    message: "Note deleted",
  });
};

module.exports = notesController;
