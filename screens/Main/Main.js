import React, { useState } from "react";
import SpeechField from "./SpeechField";
import SpeakButton from "./SpeakButton";
import DeleteButton from "./DeleteButton";
import FloatingContainer from "./FloatingContainer";
import fetchAudio from "../../services/fetchAudio";
import playBase64URIAudio from "../../utils/playBase64URIAudio";

import Container from "../../components/Container";

const Main = () => {
  const [speech, setSpeech] = useState("");

  const handleSpeech = async () => {
    if (speech === "") return;
    try {
      const audio = await fetchAudio(speech);
      playBase64URIAudio(audio);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <SpeechField defaultValue={speech} onChangeText={setSpeech} />
      <FloatingContainer
        center={<SpeakButton onPress={() => handleSpeech()} />}
        right={<DeleteButton onPress={() => setSpeech("")} />}
      />
    </Container>
  );
};

export default Main;
