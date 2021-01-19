import React, { useState, createContext } from "react";
import fetchAudio from "../../services/fetchAudio";
import playBase64URIAudio from "../../utils/playBase64URIAudio";
import styles from "../../styles";

const SpeechContext = createContext();

const SpeechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const speak = async (text) => {
    if (text === "") return;
    try {
      setLoading(true);
      const audio = await fetchAudio(text);
      setLoading(false);
      playBase64URIAudio(audio);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SpeechContext.Provider value={{ loading, speak }}>
      {children}
    </SpeechContext.Provider>
  );
};

export default SpeechProvider;
export { SpeechContext };
