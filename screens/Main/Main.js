import React, { useState } from "react";
import {
  PanGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import fetchAudio from "../../services/fetchAudio";
import playBase64URIAudio from "../../utils/playBase64URIAudio";
import Container from "../../components/Container";
import SpeechField from "./SpeechField";
import SpeakButton from "./SpeakButton";
import DeleteButton from "./DeleteButton";
import FloatingContainer from "./FloatingContainer";

const Main = () => {
  const [speech, setSpeech] = useState("");
  const [history, setHistory] = useState([]);
  const [historyPosition, setHistoryPosition] = useState(-1);
  const [loading, setLoading] = useState(false);

  const handleSpeech = async () => {
    if (speech === "") return;
    try {
      setLoading(true);
      const audio = await fetchAudio(speech);
      setLoading(false);
      playBase64URIAudio(audio);
      setHistory([speech, ...history]);
      setHistoryPosition(-1);
      setSpeech("");
    } catch (error) {
      console.error(error.message);
    }
  };

  const goBackInHistory = () => {
    const position = historyPosition + 1;

    if (Boolean(history[position])) {
      if (speech !== "" && historyPosition === -1 && history[0] !== speech) {
        setHistory([speech, ...history]);
      }

      setSpeech(history[position]);
      setHistoryPosition(position);
    }
  };

  const goForwardInHistory = () => {
    const position = historyPosition - 1;

    if (Boolean(history[position])) {
      setSpeech(history[position]);
      setHistoryPosition(position);
    }
  };

  const handlePanEvent = ({ nativeEvent }) => {
    console.log(history);
    if (nativeEvent.oldState === State.ACTIVE) {
      if (nativeEvent.translationX > 0) {
        goForwardInHistory();
      } else {
        goBackInHistory();
      }
    }
  };

  return (
    <Container>
      <PanGestureHandler
        direction={Directions.RIGHT | Directions.LEFT}
        onHandlerStateChange={handlePanEvent}
      >
        <SpeechField defaultValue={speech} onChangeText={setSpeech} />
      </PanGestureHandler>
      <FloatingContainer
        center={
          <SpeakButton loading={loading} onPress={() => handleSpeech()} />
        }
        right={<DeleteButton onPress={() => setSpeech("")} />}
      />
    </Container>
  );
};

export default Main;
