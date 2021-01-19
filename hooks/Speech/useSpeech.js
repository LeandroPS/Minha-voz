import { useContext } from "react";
import { SpeechContext } from "./SpeechProvider";

const useSpeech = () => useContext(SpeechContext);

export { useSpeech };
