import React, { useState } from "react";
import SpeechField from "./SpeechField";
import RoundButton from "./RoundButton";
import FloatingContainer from "./FloatingContainer";
import fetchAudio from "../../services/fetchAudio";
import playBase64URIAudio from "../../utils/playBase64URIAudio";
import { Button } from "react-native";

import Container from "../../components/Container";

const Main = ({ navigation }) => {
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
      <SpeechField value={speech} onChangeText={setSpeech} />

      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <FloatingContainer>
        <RoundButton title="Speak" onPress={() => handleSpeech()} />
      </FloatingContainer>
    </Container>
  );
};

export default Main;
