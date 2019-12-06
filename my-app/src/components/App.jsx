import React from "react";
import Enter from "./Enter";
import emojipedia from "../emojipedia";

function enterCreate(emoji) {
  return (
    <Enter
      key={emoji.id}
      img={emoji.emoji}
      name={emoji.name}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(enterCreate)}</dl>
    </div>
  );
}

export default App;
