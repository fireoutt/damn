import React, { useEffect, useState } from "react";
import { Container, Paper, TextField, Typography } from "@material-ui/core";
import socket from "./socket";

const messageHTMLList = (msgs: string[]): React.ReactElement[] => {
  return msgs.map((msg: string) => <Typography>{msg}</Typography>);
}

const ChatContainer: React.FC = () => {
  const [messageList, setMessageList] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  
  useEffect(()=>{
    socket.on('chat_message', (data: string) => {
      setMessageList([...messageList, data]);
    });
  });

  return (
    <Container>
      <Paper style={{maxHeight: "80%", height: "80vh", overflow: "auto"}}>
        {messageHTMLList(messageList)}
      </Paper>
      <TextField
        id="outlined-textarea-static"
        label="Write a Message!"
        multiline
        rows="1"
        rowsMax="4"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e: any) => setText(e.target.value)}
        onKeyPress={(ev: any) => {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            socket.emit('chat_message', text);
            setText("");
          }
        }}
      />
    </Container>
  );
}

export default ChatContainer;