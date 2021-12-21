import React, { Component } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault(); // prevent reset form

    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });

    this.setState({ username: "" });
    this.getUsers();
  };

  deleteUser = async (id) => {
    console.log(id);

    await axios.delete(`http://localhost:4000/api/users/${id}`);
    this.getUsers();
  };

  render() {
    return (
      <Box sx={{ width: "100%", p: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <form onSubmit={this.onSubmit}>
                <h3>Create New User</h3>
                <Input
                  placeholder="username"
                  onChange={this.onChangeUsername}
                  value={this.state.username}
                />
                <Button type="submit">Create</Button>
              </form>
            </Item>
          </Grid>
          <Grid item xs={6}>
            {this.state.users.map((user) => (
              <Item
                key={user._id}
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                {user.username}
                <DeleteIcon
                  sx={{ position: "absolute", right: 30 }}
                  onClick={() => this.deleteUser(user._id)}
                />
              </Item>
            ))}
          </Grid>
        </Grid>
      </Box>
    );
  }
}
