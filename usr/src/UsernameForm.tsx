import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import socket from "./socket";

const UsernameForm: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  const [username, setUsername] = React.useState<string>("");

  return (
    <Dialog open={open}>
      <DialogTitle id="username-form">Please Enter a Display Name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Display Name"
          variant="outlined"
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            socket.emit('username', username); 
            setOpen(false);
          }}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UsernameForm;
