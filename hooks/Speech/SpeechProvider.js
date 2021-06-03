import React, { useState, createContext } from "react";
import convertBlobToBase64 from "../../utils/convertBlobToBase64";
import fetchAudio from "../../services/fetchAudio";
import playBase64URIAudio from "../../utils/playBase64URIAudio";
import * as Analytics from "expo-firebase-analytics";

const SpeechContext = createContext();

const SpeechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const speak = async (text) => {
    if (text === "") return;

    try {
      setLoading(true);
      const audioBlob = await fetchAudio(text);
      const audio = convertBlobToBase64(audioBlob);
      setLoading(false);
      setError(null);
      playBase64URIAudio(audio);

      await Analytics.logEvent("spokeText", {
        length: text.length,
      });
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <SpeechContext.Provider value={{ loading, speak, error }}>
      {children}
    </SpeechContext.Provider>
  );
};

export default SpeechProvider;
export { SpeechContext };
