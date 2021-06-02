import React from "react";
import { useSettings } from "../../hooks/Settings";
import Slider from "@react-native-community/slider";
import Container from "./Container";
import Section from "./Section";
import Title from "./Title";

const Settings = () => {
  const { settings, setSettings } = useSettings();
  const { speed } = settings;

  const setSpeed = (speedValue) => {
    setSettings({
      ...settings,
      speed: speedValue,
    });
  };

  return (
    <Container>
      <Title>Configurações</Title>
      <Section title="Velocidade de fala">
        <Slider
          onSlidingComplete={setSpeed}
          value={speed}
          minimumValue={0}
          maximumValue={2}
        />
      </Section>
    </Container>
  );
};

export default Settings;
