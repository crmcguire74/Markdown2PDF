import React from "react";

function MarkdownEditor({ markdown, setMarkdown }) {
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <textarea
        value={markdown}
        onChange={handleChange}
        style={{ flex: 1, width: "100%", resize: "none" }}
        placeholder="Enter your markdown here..."
      />
      <input
        type="file"
        onChange={handleFileUpload}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default MarkdownEditor;
