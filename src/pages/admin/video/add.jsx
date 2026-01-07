import { useState } from "react";

function Add() {
  // yahan existing link aayega (edit ke time)
  const [videoLink, setVideoLink] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!videoLink) {
      alert("Please enter video link");
      return;
    }

    if (isEdit) {
      console.log("Updated Video Link:", videoLink);
      alert("Video link updated");
    } else {
      console.log("Added Video Link:", videoLink);
      alert("Video link added");
      setIsEdit(true); // add ke baad edit mode
    }
  };

  return (
    <>
      <h2>{isEdit ? "Update Video" : "Add Video"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter video link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          style={{ width: "300px", padding: "8px" }}
        />

        <br /><br />

        <button type="submit">
          {isEdit ? "Update" : "Add"}
        </button>
      </form>

      {videoLink && (
        <div style={{ marginTop: "20px" }}>
          <p>Current Video Link:</p>
          <a href={videoLink} target="_blank" rel="noreferrer">
            {videoLink}
          </a>
        </div>
      )}
    </>
  );
}

export default Add;
