const notesController = {};

notesController.getNotes = (req, res) => {
  res.json({
    method: "GET",
    route: "notes",
  });
};

notesController.createNote = (req, res) => {
  res.json({
    method: "POST",
    route: "notes",
    message: "Note saved",
  });
};

notesController.getNote = (req, res) => {
  res.json({
    title: "Example text",
  });
};

notesController.updateNote = (req, res) => {
  res.json({
    method: "PUT",
    route: "notes",
    message: "Note updated",
  });
};

notesController.deleteNote = (req, res) => {
  res.json({
    method: "DELETE",
    route: "notes",
    message: "Note deleted",
  });
};

module.exports = notesController;
