import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Helper function to split text nodes at newline characters and intersperse <br/>
function splitLines(children) {
  return React.Children.toArray(children).flatMap((child, i) => {
    if (typeof child === "string") {
      return child
        .split("\n")
        .flatMap((segment, j, arr) =>
          j < arr.length - 1 ? [segment, <br key={`${i}-${j}`} />] : [segment]
        );
    }
    return child;
  });
}

function MarkdownPreview({ markdown }) {
  return (
    <div style={{ height: "100%", overflowY: "auto", padding: "10px" }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ node, children, ...props }) => (
            <p {...props}>{splitLines(children)}</p>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownPreview;
