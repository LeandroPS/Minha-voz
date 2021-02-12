import React from "react";
import { Platform, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import styles from "../../styles";

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${styles["color-background"]};
`;

const SafeArea = styled.ScrollView`
  flex: 1;
  padding: 0 ${styles["spacing-4"]};
`;

const Container = ({ children, afterScrollView, ...props }) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={useHeaderHeight()}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      {...props}
    >
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <SafeArea>{children}</SafeArea>
        {afterScrollView}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Container;
