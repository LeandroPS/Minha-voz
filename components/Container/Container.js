import React from "react";
import { Platform } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styled from "styled-components/native";

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: green;
`;

const Container = ({ children }) => (
  <KeyboardAvoidingView
    keyboardVerticalOffset={useHeaderHeight()}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
  >
    <StyledSafeAreaView edges={["top", "bottom"]} bottom={20}>
      {children}
    </StyledSafeAreaView>
  </KeyboardAvoidingView>
);

export default Container;
