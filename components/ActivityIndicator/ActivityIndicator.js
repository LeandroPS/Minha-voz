import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

const BallContainer = styled.View`
  flex-direction: row;
  width: 60px;
  height: 25px;
  justify-content: space-between;
`;

const Ball = ({ color, delay }) => {
  const position = useRef(new Animated.Value(0)).current;
  const size = 10;

  const animation = useRef(
    Animated.sequence([
      Animated.delay(delay * 200),
      Animated.loop(
        Animated.sequence([
          Animated.timing(position, {
            toValue: 15,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(position, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
        {}
      ),
    ])
  ).current;

  useEffect(() => {
    animation.start();
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: position }],
        width: size,
        height: size,
        borderRadius: 20,
        backgroundColor: color,
      }}
    />
  );
};

const ActivityIndicator = ({ color = "#fff" }) => (
  <BallContainer>
    <Ball delay={0} color={color} />
    <Ball delay={1} color={color} />
    <Ball delay={2} color={color} />
  </BallContainer>
);

export default ActivityIndicator;
