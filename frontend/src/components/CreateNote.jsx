import React, { Component } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");

    this.setState({
      users: res.data.map((user) => user.username),
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };

    await axios.post("http://localhost:4000/api/notes", newNote);
    window.location.href = "/";
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeDate = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <Card sx={{ width: "50%", m: "auto", mt: 10 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Create Note
          </Typography>

          {/* Select user */}
          <form className="create-note-form" onSubmit={this.onSubmit}>
            <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="demo-simple-select-label">author</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="author"
                name="userSelected"
                value={this.state.userSelected}
                onChange={this.onInputChange}
                required
              >
                {this.state.users.map((user, index) => (
                  <MenuItem key={index} value={user}>
                    {user}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <Input
                placeholder="Title"
                name="title"
                sx={{ mt: 1 }}
                onChange={this.onInputChange}
                required
              />

              <TextField
                name="content"
                placeholder="content"
                multiline
                maxRows={4}
                onChange={this.onInputChange}
                sx={{ mt: 1, mb: 1 }}
                required
              />
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
                className="date-api-style"
              />
            </FormControl>

            <CardActions>
              <Button type="submit" size="medium" variant="outlined">
                Save
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    );
  }
}
