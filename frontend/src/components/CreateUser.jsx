import React, { Component } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

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

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <Box sx={{ width: "100%", p: 2 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <form>
                <h3>Create New User</h3>
                <Input
                  placeholder="username"
                  onChange={this.onChangeUsername}
                />
                <Button>Create user</Button>
              </form>
            </Item>
          </Grid>
          <Grid item xs={6}>
            {this.state.users.map((user) => (
              <Item key={user._id} sx={{ mb: 1 }}>
                {user.username}
              </Item>
            ))}
          </Grid>
        </Grid>
      </Box>
    );
  }
}
