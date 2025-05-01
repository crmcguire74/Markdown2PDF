import React, { useState } from "react";
import { initializeIcons } from "@fluentui/react";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import Toolbar from "./components/Toolbar";
import "./App.css";

initializeIcons();

function App() {
  const [markdown, setMarkdown] = useState("# Welcome to Markdown Editor");
  const [isEditingPreview, setIsEditingPreview] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          flex: 1,
          borderRight: "1px solid #ddd",
          padding: "10px",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      </div>
      <div style={{ flex: 1, padding: "10px", overflow: "auto" }}>
        {isEditingPreview ? (
          <>
            <Toolbar />
            <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
          </>
        ) : (
          <MarkdownPreview markdown={markdown} />
        )}
      </div>
    </div>
  );
}

export default App;
