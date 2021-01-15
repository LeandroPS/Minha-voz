import React from "react";
import { Platform, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import styles from "../../styles";

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${styles["color-background"]};
`;

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 0 ${styles["spacing-4"]};
`;

const Container = ({ children, afterScrollView, ...props }) => (
  <KeyboardAvoidingView
    keyboardVerticalOffset={useHeaderHeight()}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    {...props}
  >
    <StyledSafeAreaView edges={["top", "bottom"]} bottom={20}>
      <View style={{ flex: 1 }}>
        <ScrollView>{children}</ScrollView>
      </View>
      {afterScrollView}
    </StyledSafeAreaView>
  </KeyboardAvoidingView>
);

export default Container;
