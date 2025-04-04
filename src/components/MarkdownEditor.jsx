import React, { useState, useEffect } from "react";
import { marked } from "marked";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Heading\nType your text here...");
  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(marked.parse(markdown));
  }, [markdown]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export default MarkdownEditor;
