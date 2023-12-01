import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1 className="h1">Hello World</h1>
      <p className="p">Hallo!</p>
      <p className="p">Hallo 2</p>
    </article>
  );
}
