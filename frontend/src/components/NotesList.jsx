import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import { format } from "timeago.js";

export default class NotesList extends Component {
  state = {
    notes: [],
    image:
      "https://images.unsplash.com/photo-1640195516482-aaab6c242863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=300&q=60",
  };

  componentDidMount() {
    this.getNotes();
  }

  getNotes = async () => {
    const res = await axios.get("http://localhost:4000/api/notes");
    this.setState({ notes: res.data });
  };

  deleteNote = async (id) => {
    await axios.delete(`http://localhost:4000/api/notes/${id}`);
    this.getNotes();
  };

  render() {
    return (
      <Grid
        container
        sx={{ p: 1 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {this.state.notes.map((note, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={this.state.image}
                alt="Images todo app"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  Title: {note.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {note.content}
                </Typography>
                <Typography sx={{ fontSize: 12 }}>{note.author}</Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {format(note.date)}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => this.deleteNote(note._id)}
                >
                  Delete
                </Button>
                <Link to={`/edit/${note._id}`}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="info"
                    size="small"
                    sx={{ left: 10 }}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
