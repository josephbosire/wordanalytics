import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState(null);

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("No script tags allowed");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarningText("No special symbols allowed @");
    } else {
      setWarningText(null);
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
};

export default Textarea;
