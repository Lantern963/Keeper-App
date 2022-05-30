import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [boo, setBoo] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function show() {
    setBoo(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={boo ? null : { display: "none" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={boo ? 3 : 1}
          onClick={show}
        />
        <Zoom in={true} style={boo ? null : { display: "none" }}>
          <Fab onClick={submitNote}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
