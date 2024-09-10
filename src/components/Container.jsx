import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../constants";

const Container = () => {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const stats = {
    numberOfWords,
    numberOfCharacters,
    instagramCharactersLeft,
    facebookCharactersLeft,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
