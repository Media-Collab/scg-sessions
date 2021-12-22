import React, { Component } from "react";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { format } from "timeago.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
}));

export default class NotesList extends Component {
  state = {
    notes: [],
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
            <Item>
              <Typography component="h5" sx={{ fontWeight: "bold" }}>
                Title: {note.title}
              </Typography>
              <Typography>{note.content}</Typography>
              <Typography sx={{ fontSize: 12 }}>{note.author}</Typography>
              <Typography sx={{ fontSize: 12 }}>{format(note.date)}</Typography>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  sx={{ left: -10 }}
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
                    startIcon={<DeleteIcon />}
                  >
                    Edit
                  </Button>
                </Link>
              </CardActions>
            </Item>
          </Grid>
        ))}
      </Grid>
    );
  }
}
