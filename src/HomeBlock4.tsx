import React, { useState, useEffect } from "react";

// style
import "./HomeBlock4.css";
import { makeStyles, TextField, CircularProgress } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   textfield: {
//     margin: "10px 0px 10px 0px",
//   },
// }));

function HomeBlock4() {
  // This block is used to reply to the RSVP
  // input : firstname, lastname, email address, comments

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendRSVPResponse = () => {
    console.log("Message sent for current user");
    setIsSending(true);
  };

  return (
    <div className="block3">
      <h1>RSVP</h1>
      {/* Lastname */}
      <TextField
        className="field"
        label="Firstname"
        variant="outlined"
        value={firstname}
        type="text"
        onChange={(e) => setFirstname(e.target.value)}
      />
      {/* Lastname */}
      <TextField
        label="Lastname"
        variant="outlined"
        value={lastname}
        type="text"
        onChange={(e) => setLastname(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="addChildButton"> + Add Child</button>

      <TextField
        label="Comments"
        variant="outlined"
        value={comments}
        type="text"
        onChange={(e) => setComments(e.target.value)}
      />
      <button disabled={isSending} onClick={() => sendRSVPResponse()}>
        Send &gt;&gt;
        {isSending && <CircularProgress style={{ color: "white" }} />}
      </button>
    </div>
  );
}

export default HomeBlock4;
