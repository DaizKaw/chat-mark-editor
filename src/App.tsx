import React, { useState } from "react";
import SimpleMde from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import "easymde/dist/easymde.min.css";
import "./styles.css";

export default function App() {
  const [markdownValue, setMarkdownValue] = useState("Initial value");

  const onChange = (value: string) => {
    setMarkdownValue(value);
  };

  return (
    <div className="top-layout">
      <SimpleMde value={markdownValue} onChange={onChange} />
      <ReactMarkdown>{markdownValue}</ReactMarkdown>
    </div>
  );
}
