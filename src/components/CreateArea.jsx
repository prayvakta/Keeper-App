import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [displayBody, setDisplayBody] = useState("none");

  function expandBody() {
    setDisplayBody("initial");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
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
    setDisplayBody("none");
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <div style={{ display: displayBody }}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </div>
        <textarea
          name="content"
          onClick={expandBody}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={displayBody === "none" ? "1" : "3"}
        />
        <div style={{ display: displayBody }}>
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
