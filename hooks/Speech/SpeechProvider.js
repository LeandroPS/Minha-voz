import React, { useState, createContext } from "react";
import fetchAudio from "../../services/fetchAudio";
import playBase64URIAudio from "../../utils/playBase64URIAudio";
import * as Analytics from "expo-firebase-analytics";

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

      await Analytics.logEvent("spokeText", {
        length: text.length,
      });
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
