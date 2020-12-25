import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import FloatingContainer from "./FloatingContainer";

describe("<FloatingContainer />", () => {
  it("should render", () => {
    const { getByText } = render(
      <FloatingContainer>
        <Text>Hello world</Text>
      </FloatingContainer>
    );

    expect(getByText("Hello world")).toBeTruthy();
  });
});
