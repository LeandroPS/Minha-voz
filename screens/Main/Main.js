import React, { useState, useRef, useEffect } from "react";
import {
  PanGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { PanResponder, View } from "react-native";
import { useSpeech } from "../../hooks/Speech";
import Container from "../../components/Container";
import {
  HeaderLogo,
  HeaderButton,
  HeaderButtonContainer,
} from "../../components/Header";
import SpeechField from "./SpeechField";
import SpeakButton from "./SpeakButton";
import DeleteButton from "./DeleteButton";
import FloatingContainer from "./FloatingContainer";
import Heading from "./Heading";
import FavoritesList from "./FavoritesList";
import styled from "styled-components/native";

const Wrapper = styled.View`
  padding-bottom: 100px;
`;

const Main = ({ navigation }) => {
  const [speech, setSpeech] = useState("");
  const [history, setHistory] = useState([]);
  const [historyPosition, setHistoryPosition] = useState(-1);
  const { speak, loading } = useSpeech();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLogo />,
      headerRight: () => (
        <HeaderButtonContainer>
          <HeaderButton
            icon="Sliders"
            onPress={() => navigation.navigate("Settings")}
          />
        </HeaderButtonContainer>
      ),
    });
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onPanResponderMove: handlePanEvent,
    })
  ).current;

  const handleSpeech = async () => {
    if (speech === "") return;
    try {
      speak(speech);
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
      console.log(`seta ${history[position]}`);
      setHistoryPosition(position);
    }
  };

  const goForwardInHistory = () => {
    const position = historyPosition - 1;

    if (Boolean(history[position])) {
      setSpeech(history[position]);
      console.log(`seta ${history[position]}`);
      setHistoryPosition(position);
    }
  };

  // const handlePanEvent = ({ nativeEvent }) => {
  //   if (nativeEvent.oldState === State.ACTIVE) {
  //     console.log("foi");
  //     if (nativeEvent.translationX > 0) {
  //       goForwardInHistory();
  //     } else {
  //       goBackInHistory();
  //     }
  //   }
  // };

  const handlePanEvent = (event, gestureState) => {
    console.log("foi");
    if (gestureState.dx > 0) {
      console.log("goforward");
      goForwardInHistory();
    } else {
      console.log("goBack");
      goBackInHistory();
    }
  };

  return (
    <Container
      afterScrollView={
        <FloatingContainer
          center={
            <SpeakButton loading={loading} onPress={() => handleSpeech()} />
          }
          right={<DeleteButton onPress={() => setSpeech("")} />}
        />
      }
    >
      <Wrapper>
        {/* <PanGestureHandler
        direction={Directions.RIGHT | Directions.LEFT}
        onHandlerStateChange={handlePanEvent}
      > */}
        <SpeechField
          defaultValue={speech}
          onChangeText={setSpeech}
          {...panResponder.panHandlers}
        />
        {/* </PanGestureHandler> */}
        <Heading>Frases Favoritas</Heading>
        <FavoritesList />
      </Wrapper>
    </Container>
  );
};

export default Main;
